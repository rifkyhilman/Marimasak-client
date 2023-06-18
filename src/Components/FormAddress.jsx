import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const FormAddress = ({ onChange }) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Alamat Pengiriman
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nama Depan"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Nama Belakang"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Alamat"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Kota"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="Provinsi"
            fullWidth
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Kecamatan"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Kode Pos"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default FormAddress;
