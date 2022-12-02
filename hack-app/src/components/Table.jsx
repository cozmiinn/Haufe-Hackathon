import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function BasicTable() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(res => {
                setLocations(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })

    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Tip colectare</TableCell>
                        <TableCell>Adresa</TableCell>
                        <TableCell>Companie</TableCell>
                        <TableCell>Latitudine</TableCell>
                        <TableCell>Longitudine</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {locations.map((location) => (
                        <TableRow key={location.name}>
                            <TableCell>{location.id}</TableCell>
                            <TableCell>{location['tip colectare']}</TableCell>
                            <TableCell>{location.adresa}</TableCell>
                            <TableCell>{location.companie}</TableCell>
                            <TableCell>{location.latitudine}</TableCell>
                            <TableCell>{location.longitudine}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}