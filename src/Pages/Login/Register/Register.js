import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';

import { Container, Typography } from '@mui/material';
import login from '../../../images/login.png'
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';

const Register = () => {
  const [registerData, setRegisterData] = useState({});

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    // if (registerData.password !== registerData.password2) {
    //   alert("Your password not match");
    //   return;
    // }
    setRegisterData(data);

  };

  return (
    <Container>
      <Grid sx={{ mt: 5 }} container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>Register</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              sx={{ width: ' 75%', m: 1 }}
              type="text"
              label="Your Name"
              variant="standard"
              required {...register("name")}
            />
            <TextField
              sx={{ width: ' 75%', m: 1 }}
              type="email"
              label="Your Email"
              variant="standard"
              required {...register("email")}
            />

            <TextField
              sx={{ width: ' 75%', m: 1 }}
              label="Your Password"
              type="password"
              variant="standard"
              {...register("password")}
            />
            {/* <TextField
              sx={{ width: ' 75%', m: 1 }}
              label="Re-type Your Password"
              type="password"
              variant="standard"
              {...register("password2")}
            /> */}
            {errors.exampleRequired && <span>This field is required</span>}
            <br />
            <Button variant="contained" type="submit">Submit</Button>
            <br />
            <NavLink style={{ textDecoration: 'none' }} to="/login"><Button variant="text">Allready Registered Please Login</Button></NavLink>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: '100%' }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;