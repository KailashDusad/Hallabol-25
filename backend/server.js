const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


const credentials = {
    type: process.env.GOOGLE_SERVICE_ACCOUNT_TYPE,
    project_id: process.env.GOOGLE_SERVICE_ACCOUNT_PROJECT_ID,
    private_key_id: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_ID,
    auth_uri: process.env.GOOGLE_SERVICE_ACCOUNT_AUTH_URI,
    token_uri: process.env.GOOGLE_SERVICE_ACCOUNT_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.GOOGLE_SERVICE_ACCOUNT_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.GOOGLE_SERVICE_ACCOUNT_CLIENT_X509_CERT_URL,
    universe_domain: process.env.GOOGLE_SERVICE_ACCOUNT_UNIVERSE_DOMAIN,
  };

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
});

const spreadsheetId = '1P8GV5XsURYheDH1uz3ba6QCkBFCbwE0l0qarI7xGvQ8'; 

async function getOrCreateSheet(auth, sport) {
    const sheets = google.sheets({ version: 'v4', auth });

    const res = await sheets.spreadsheets.get({ spreadsheetId });
    const sheetTitles = res.data.sheets.map(sheet => sheet.properties.title);

    if (!sheetTitles.includes(sport)) {
        await sheets.spreadsheets.batchUpdate({
            spreadsheetId,
            requestBody: {
                requests: [
                    {
                        addSheet: {
                            properties: {
                                title: sport,
                                gridProperties: {
                                    rowCount: 1000,
                                    columnCount: 20,
                                },
                            },
                        },
                    },
                ],
            },
        });

        const headerValues = [
            ['Sport', 'Team Name', 'Captain Name', 'Captain Roll No.', 'Captain Email', 'Captain Contact'],
        ];
        await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: `${sport}!A1:F1`,
            valueInputOption: 'RAW',
            requestBody: { values: headerValues },
        });
    }

    return sport;
}

async function saveToSpreadsheet(data) {
    try {
        const sheets = google.sheets({ version: 'v4', auth });
        const sport = data[0];

        // Ensure the sheet exists
        await getOrCreateSheet(auth, sport);

        // Append the row data to the appropriate sheet
        const range = `${sport}!A1`; // Append to the sport-specific sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'RAW',
            insertDataOption: 'INSERT_ROWS',
            requestBody: { values: [data] },
        });
    } catch (err) {
        console.error('Error saving to spreadsheet:', err.message);
        throw new Error('Failed to save data.');
    }
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/register', async (req, res) => {
    const {
        gameselect,
        teamname,
        teamleader,
        teamleaderroll,
        teamleaderemail,
        teamleadercontact,
        members = [],
    } = req.body;

    // Validate required fields
    if (!gameselect || !teamname || !teamleader || !teamleaderroll || !teamleaderemail || !teamleadercontact) {
        return res.status(400).json({ error: 'Missing required fields!' });
    }

    const rowData = [gameselect, teamname, teamleader, teamleaderroll, teamleaderemail, teamleadercontact];

    // Process members array
    for (let i = 0; i < members.length; i += 2) {
        const name = members[i];
        const rollNo = members[i + 1];

        // Validate that both name and roll number are present
        if (name && rollNo) {
            rowData.push(name, rollNo);
        }
    }

    try {
        await saveToSpreadsheet(rowData);
        res.status(200).json({ message: 'Registration successful!' });
    } catch (error) {
        console.error('Error saving data:', error.message);
        res.status(500).json({ error: 'Failed to save data. Please try again later.' });
    }
});

app.get('/points', async (req, res) => {
    const spreadsheetId = '1Cj7zeXhE1Sh9eyzpHgZHZ9-5jJ0iPLjZZuLOGGwuJTA';

    try {
        const sheets = google.sheets({ version: 'v4', auth });

        // Get all sheet names in the spreadsheet
        const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
        const sheetTitles = spreadsheet.data.sheets.map(sheet => sheet.properties.title);

        const allData = {};

        // Fetch data from each sheet
        for (const title of sheetTitles) {
            const range = `${title}!A1:C`; // Adjust the range to fit your sheet structure

            const response = await sheets.spreadsheets.values.get({
                spreadsheetId,
                range,
            });

            if (response.data.values) {
                const headers = response.data.values[0];
                const rows = response.data.values.slice(1);

                const jsonData = rows.map((row) => {
                    const rowData = {};
                    headers.forEach((header, index) => {
                        rowData[header] = row[index] || ''; // Handle missing values gracefully
                    });
                    return rowData;
                });

                allData[title] = jsonData;
            } else {
                allData[title] = []; // Handle empty sheets
            }
        }

        res.json(allData);
    } catch (error) {
        console.error('Error fetching points data:', error.message);
        res.status(500).json({ error: 'Failed to fetch points data.' });
    }
});


app.listen(process.env.PORT || 5000, () => {
    console.log(`The application is running on localhost!`);
});
