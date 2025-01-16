import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import '../Styles/FormLogin.scss';

import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const FormLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const data = {
      email: email.value,
      password: password.value,
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error("Format email yang Anda masukkan tidak valid");
      return;
    }

    if (data.email && data.password) {
      if (data.password) {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_API_AUTH}/login`,
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

            localStorage.setItem("Token", dataRes.access_token);

            setTimeout(() => {
              navigate('/');
            }, 2000);
            
          } else {
            toast.error(dataRes.error);
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error("Terjadi kesalahan");
        }
      }
    } else {
      toast.error("Pastikan Anda sudah mengisi semua data");
    }
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className='ContainerBoxLogin'>
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
            <div className="ContainerBoxLogin__avatar">
                <LockOutlinedIcon />
            </div>
            <Typography component="h1" variant="h5">
              Masukan Akun
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
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
              <div className="ContainerBoxLogin__btn-login">
                <button>
                  Masuk
                </button>
              </div>
              <Grid className="ContainerBoxLogin__link" container justifyContent="flex-end">
                  <p>Tidak Punya Akun ?</p>
                  <Link href="/register" variant="body2">
                   <p>Daftar Sekarang</p> 
                  </Link>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Toaster />
      </Container>
  );
};

export default FormLogin;
