const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Load Google Sheets credentials
const credentialsPath = path.join(__dirname, 'google-service-account.json');
const credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'));

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
});

// Replace with your Google Sheet ID
const spreadsheetId = '1P8GV5XsURYheDH1uz3ba6QCkBFCbwE0l0qarI7xGvQ8'; 

async function getOrCreateSheet(auth, sport) {
    const sheets = google.sheets({ version: 'v4', auth });

    // Fetch the list of sheets
    const res = await sheets.spreadsheets.get({ spreadsheetId });
    const sheetTitles = res.data.sheets.map(sheet => sheet.properties.title);

    // If the sheet for the sport doesn't exist, create it
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

        // Add headers to the new sheet
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

app.listen(process.env.PORT || 5000, () => {
    console.log(`The application is running on localhost!`);
});
