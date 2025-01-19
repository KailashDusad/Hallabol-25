import React, { useEffect, useState } from 'react';
import './styles/Table.css';
import Loader from './Loader';

const Table = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/points'); 
                // const response = await fetch('https://hallabol-25.vercel.app/points'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch points data.');
                }
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        // return <div className="error">{error}</div>;
        return (
            <section className="team-section">
                <h1> {error} </h1>
            </section>
        );
        
    }

    if (!Object.keys(data).length) {
        return (
            <section className="team-section">
                <h1>Will be updated soon...</h1>
            </section>
        );
    }

    return (
        <div className="container">
            <h2>Points Table</h2>
            {Object.keys(data).map((sheetName) => (
                <div key={sheetName}>
                    <h3>{sheetName}</h3>
                    <table>
                        <thead>
                            <tr>
                                {data[sheetName].length > 0 &&
                                    Object.keys(data[sheetName][0]).map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data[sheetName].map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Object.values(row).map((cell, cellIndex) => (
                                        <td key={cellIndex}>{cell}</td>
                                    ))}
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
