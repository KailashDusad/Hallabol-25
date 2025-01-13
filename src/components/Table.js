import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import './Table.css';

const Table = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/static/Points.xlsx');
                const arrayBuffer = await response.arrayBuffer();
                const workbook = XLSX.read(arrayBuffer, { type: 'array' });
                let combinedData = {};

                workbook.SheetNames.forEach(sheetName => {
                    const worksheet = workbook.Sheets[sheetName];
                    const jsonData = XLSX.utils.sheet_to_json(worksheet);
                    combinedData[sheetName] = jsonData;
                });

                setData(combinedData);
            } catch (error) {
                console.error('Error fetching or parsing the Excel file:', error);
            }
        };

        fetchData();
    }, []);
    if (Object.keys(data).length === 0) {
        return (
            <section className="team-section">
                <h1>Will be updated soon...</h1>
            </section>
        );
    }

    return (
        <div className="container">
            {Object.keys(data).map((game, index) => (
                <div key={index}>
                    <h2>{game}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Team 1</th>
                                <th>Team 2</th>
                                <th>Winner</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data[game].map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                <td data-label="Team 1">{row.Team1}</td>
                                <td data-label="Team 2">{row.Team2}</td>
                                <td data-label="Winner">{row.Winner}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default Table;