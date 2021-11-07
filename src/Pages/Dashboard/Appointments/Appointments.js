import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Appointments = ({ date }) => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/appointments?email=${user.email}&date=${date}`)
      .then(res => res.json())
      .then(data => setAppointments(data))
  }, [date])
  return (
    <div>
      <h2>Appointments : {appointments.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell >Name</TableCell>
              <TableCell >Time</TableCell>
              <TableCell >Service</TableCell>
              <TableCell >Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell >{row.patientName}</TableCell>
                <TableCell >{row.time}</TableCell>
                <TableCell >{row.serviceName}</TableCell>
                <TableCell >{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appointments;