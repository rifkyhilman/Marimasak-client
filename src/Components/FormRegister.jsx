import React from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import '../Styles/FormRegister.scss';

import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


import VpnKeyIcon from '@mui/icons-material/VpnKey';


const defaultTheme = createTheme();

const FormRegister = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } =
      event.target.elements;
    const data = {
      nama: firstName.value + " " +lastName.value,
      email: email.value,
      password: password.value
    };
    const checkPassword = confirmPassword.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Format email yang Anda masukkan tidak valid");
      return;
    }

    if (data.nama && data.email && data.password && checkPassword) {
      if (data.password === checkPassword) {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_AUTH}/register`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );

          const dataRes = await response.json();

          if (dataRes.alert) {
            toast.success(dataRes.message);
            setTimeout(() => {
              navigate("/login");
            }, 1500);
          } else {
            toast.error(dataRes.error);
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error("Terjadi kesalahan");
        }
      } else {
        toast.error("Password yang Anda masukkan tidak sama");
      }
    } else {
      toast.error("Pastikan Anda sudah mengisi semua data");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className='ContainerBoxRegister'>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: 4,
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              bgcolor: "background.paper",
            }}
          >
            <div className="ContainerBoxRegister__avatar">
              <VpnKeyIcon />
            </div>
            <Typography component="h1" variant="h5">
              Daftar Akun
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Nama Depan"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Nama Belakang"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="new-password"
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                          aria-label="toggle password visibility"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    autoComplete="new-password"
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          onClick={handleToggleConfirmPasswordVisibility}
                          edge="end"
                          aria-label="toggle confirm password visibility"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <div className="ContainerBoxRegister__btn-login">
                <button>
                  Daftar
                </button>
              </div>
              <Grid className="ContainerBoxRegister__link" container justifyContent="flex-end">
                  <p> Sudah Punya Akun ?</p>
                  <Link href="/login" variant="body2">
                    <p>Silahkan Masuk</p>
                  </Link>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Toaster />
      </Container>
    </ThemeProvider>
  );
};

export default FormRegister;
