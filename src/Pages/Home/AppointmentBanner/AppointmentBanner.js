import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Container, Typography } from '@mui/material';

const appointmentBanner = {
  background: `url(${bg})`,
  backgroundColor: 'rgba(45, 58, 74, 0.8 )',
  backgroundBlendMode: 'darken,luminosity',
  marginTop: 150,
}

const AppointmentBanner = () => {
  return (
    <Container>
      <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img style={{ width: 400, marginTop: '-110px' }} src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'left' }}>
            <Box >
              <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                Appointment
              </Typography>
              <Typography variant="h4" sx={{ mb: 4 }} style={{ color: 'white' }}>
                Make an Appointment Today
              </Typography>
              <Typography variant="p" style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque asperiores in itaque, ipsum eius iusto corporis cum sint similique modi!
              </Typography>
              <br />
              <Button variant="contained" sx={{ mt: 2 }} style={{ backgroundColor: '#5CE7ED' }} >Learn more</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AppointmentBanner;