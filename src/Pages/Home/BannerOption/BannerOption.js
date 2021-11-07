import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';


const BannerOption = () => {
  return (
    <Container style={{ marginTop: '-50px' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4} sx={{ border: '1px solid black' }}>
          <Typography variant="h6" >
            Visit our location
          </Typography>
          <Typography variant="p" >
            Brooklyn,NY 10036,United States
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ border: '1px solid black' }}>
          <Typography variant="h6" >
            Opening Hours
          </Typography>
          <Typography variant="p" >
            Lorem ipsum dolor, sit <br /> amet consectetur adipisicing
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{ border: '1px solid black' }}>
          <Typography variant="h6" >
            Contact us now
          </Typography>
          <Typography variant="p" >
            +000 123 456789
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BannerOption;



/*
 <Grid container columns={{ xs: 4, sm: 8, md: 12 }} >
        <Grid xs={4} sm={4} md={4} sx={{ boxShadow: 3 }} style={{ textAlign: 'start', backgroundColor: '#1CC7C1', color: '#FFFFFF', height: '150px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 0, }}>

        </Grid>
        <Grid xs={4} sm={4} md={4} sx={{ boxShadow: 3 }} style={{
          textAlign: 'start', backgroundColor: '#3A4256', color: '#FFFFFF', height: '150px', padding: '0', display: 'flex',
          alignItems: 'center', justifyContent: 'center',
        }}>

        </Grid>
        <Grid xs={4} sm={4} md={4} sx={{ boxShadow: 3 }} style={{ textAlign: 'start', backgroundColor: '#1CC7C1', color: '#FFFFFF', height: '150px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>

        </Grid>
      </Grid>
*/