import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const FormAddress = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nama Depan"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Nama Belakang"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Alamat Lengkap"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Kota"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Kode POS"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default FormAddress;