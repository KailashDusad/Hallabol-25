import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/path/to/your/spreadsheet.xlsx');
            const arrayBuffer = await response.arrayBuffer();
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            setData(jsonData);
        };

        fetchData();
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Game</th>
                        <th>Winner</th>
                        <th>Opponent</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.Game}</td>
                            <td>{row.Winner}</td>
                            <td>{row.Opponent}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};


export default Table
