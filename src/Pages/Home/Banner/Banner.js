import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import MuiButton from '../../../StyledComponent/MuiButton';

const bannerBg = {
  background: `url(${bg})`,

}

const verticalCenter = {
  display: 'flex',
  alignItems: 'center',
  height: 750
}
const Banner = () => {
  return (
    <div style={bannerBg}>
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
            <Box>
              <Typography variant="h3" sx={{fontWeight: 500}}>
                Your New Smile <br />
                Starts Here
              </Typography>
              <Typography variant="body1" sx={{ my: 3, fontSize: 13, color: 'gray',fontSize: 16 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum enim incidunt doloremque vitae impedit at accusantium tenetur.
              </Typography>
              <MuiButton variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Get Appointment</MuiButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={verticalCenter} >
            <img style={{ width: '500px' }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;