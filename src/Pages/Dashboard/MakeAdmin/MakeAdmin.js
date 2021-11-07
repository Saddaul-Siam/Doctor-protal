import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  console.log(email);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  }

  const handleAdminSubmit = e => {
    const user = { email };
    fetch(`http://localhost:5000/users/admin`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      })

    e.preventDefault();
  }

  return (
    <div>
      <h2> make Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          label="Email"
          variant="standard"
          type="email"
          onBlur={handleOnBlur}
        />

        <Button type="submit" variant="contained">Make Admin</Button>
      </form>
    </div>
  );
};

export default MakeAdmin;