import React from 'react';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';


const data = [
  { name: "Opening Hours", details: "" },
  { name: "Visit our location", details: "" },
  { name: " ", details: "" },
]


const BannerOption = () => {
  return (
    <Container>
      <Box style={{ marginTop: '-50px' }}>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} >
          <Grid xs={4} sm={4} md={4} sx={{ boxShadow: 3 }} style={{ textAlign: 'start', backgroundColor: '#1CC7C1', color: '#FFFFFF', height: '150px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 0, }}>
            <Box>
              <Typography variant="h6" >
                Opening Hours
              </Typography>
              <Typography variant="p" >
                Lorem ipsum dolor, sit <br /> amet consectetur adipisicing
              </Typography>
            </Box>
          </Grid>
          <Grid xs={4} sm={4} md={4} sx={{ boxShadow: 3 }} style={{
            textAlign: 'start', backgroundColor: '#3A4256', color: '#FFFFFF', height: '150px', padding: '0', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <Box>
              <Typography variant="h6" >
                Visit our location
              </Typography>
              <Typography variant="p" >
                Brooklyn,NY 10036,United States
              </Typography>
            </Box>
          </Grid>
          <Grid xs={4} sm={4} md={4} sx={{ boxShadow: 3 }} style={{ textAlign: 'start', backgroundColor: '#1CC7C1', color: '#FFFFFF', height: '150px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <Box>
              <Typography variant="h6" >
                Contact us now
              </Typography>
              <Typography variant="p" >
                +000 123 456789
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container >
  );
};

export default BannerOption;