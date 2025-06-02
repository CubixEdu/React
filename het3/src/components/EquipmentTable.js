import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(equipment, takenBy, subject) {
    return { equipment, takenBy, subject };
}

const rows = [
    createData("Canon EOS 550D", "David", "good camera"),
    createData("Pentacon Praktica", "David", "good camera"),
    createData("Kijev 4", "David", "good camera"),
];

export function EquipmentTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Equipment</TableCell>
                        <TableCell>Taken by</TableCell>
                        <TableCell>Subject</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index}
                        >
                            <TableCell>{row.equipment}</TableCell>
                            <TableCell>{row.takenBy}</TableCell>
                            <TableCell>{row.subject}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}