import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  }

  const handleAdminSubmit = e => {
    const user = { email };
    fetch(`http://localhost:5000/users/admin`, {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${token}`,
        'content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount) {
          console.log(result);
          setSuccess(true)
        }
      })

    e.preventDefault();
  }

  return (
    <div>
      <h2> make Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: '50%', m: 1 }}
          label="Email"
          variant="standard"
          type="email"
          onBlur={handleOnBlur}
        />

        <Button type="submit" variant="contained">Make Admin</Button>
      </form>
      {success && <Alert severity="success"> User login successful</Alert>}
    </div>
  );
};

export default MakeAdmin;