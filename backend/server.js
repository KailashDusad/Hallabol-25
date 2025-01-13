const express = require('express');
const path = require('path');
const fs = require('fs');
const XLSX = require('xlsx');
const cors = require('cors');

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const spreadsheetFile = path.join(__dirname, 'team_data.xlsx');
if (!fs.existsSync(spreadsheetFile)) {
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.aoa_to_sheet([
        ['Sport', 'Team Name', 'Captain Name', 'Captain Roll No.', 'Captain Email', 'Captain Contact']
    ]));
    XLSX.writeFile(workbook, spreadsheetFile);
}

function getOrCreateSheet(workbook, sport) {
    let sheet = workbook.Sheets[sport];
    if (!sheet) {
        sheet = XLSX.utils.aoa_to_sheet([
            ['Sport', 'Team Name', 'Captain Name', 'Captain Roll No.', 'Captain Email', 'Captain Contact']
        ]);
        XLSX.utils.book_append_sheet(workbook, sheet, sport);
    }
    return sheet;
}

function saveToSpreadsheet(data) {
    try {
        const workbook = XLSX.readFile(spreadsheetFile);
        const sport = data[0];
        const sheet = getOrCreateSheet(workbook, sport);
        const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const memberCount = (data.length - 6) / 2;
        const headers = sheetData[0];
        for (let i = 1; i <= memberCount; i++) {
            if (!headers.includes(`Member ${i} Name`)) {
                headers.push(`Member ${i} Name`, `Member ${i} Roll No.`);
            }
        }

        sheetData.push(data);
        const updatedSheet = XLSX.utils.aoa_to_sheet(sheetData);
        workbook.Sheets[sport] = updatedSheet;
        XLSX.writeFile(workbook, spreadsheetFile);
    } catch (err) {
        console.error('Error saving to spreadsheet:', err.message);
        throw new Error('Failed to save data.');
    }
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/download', (req, res) => {
    const spreadsheetFile = path.join(__dirname, 'team_data.xlsx');
    if (fs.existsSync(spreadsheetFile)) {
        res.download(spreadsheetFile, 'team_data.xlsx', (err) => {
            if (err) {
                console.error('Error sending file:', err.message);
                res.status(500).send('Error downloading the file.');
            }
        });
    } else {
        res.status(404).send('File not found.');
    }
});


app.post('/register', (req, res) => {
    const {
        gameselect,
        teamname,
        teamleader,
        teamleaderroll,
        teamleaderemail,
        teamleadercontact,
        members = [], // Default to an empty array if not provided
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
        saveToSpreadsheet(rowData);
        res.status(200).json({ message: 'Registration successful!' });
    } catch (error) {
        console.error('Error saving data:', error.message);
        res.status(500).json({ error: 'Failed to save data. Please try again later.' });
    }
});



app.listen(process.env.PORT || 5000, () => {
    console.log(`The application is running on localhost!`);
});
