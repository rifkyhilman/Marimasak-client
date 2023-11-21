import React from "react";
import FormAddress from "../Components/FormAddress";
import FormPayment from "../Components/FormPayment";
import Review from "../Components/Review";
import toastCheckout, { Toaster } from "react-hot-toast";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
import "../Styles/CheckoutPage.scss";

// import Komponent dari MUI5
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const steps = ["Alamat Pengiriman", "Detail Pesanan", "Methode Pembayaran"];

const defaultTheme = createTheme();

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = React.useState(0);
  const [addressData, setAddressData] = React.useState({});

  const handleNext = () => {
    if (activeStep === 0) {
      const { firstName, lastName, address, city, state, country, zip } =
        addressData;
      if (
        !firstName ||
        !lastName ||
        !address ||
        !city ||
        !state ||
        !country ||
        !zip
      ) {
        toastCheckout.error("Mohon isi semua form dengan benar");
        return;
      }

      localStorage.setItem("addressData", JSON.stringify(addressData));
    }
    if (activeStep === steps.length - 1) {
      setTimeout(() => {
        localStorage.removeItem("addressData");
        localStorage.removeItem("total");
        localStorage.removeItem("cartItems");
        navigate("/keranjang");
      }, 7000);

      toastCheckout.success(
        "Anda akan Diarahkan Ke Halaman Keranjang. Mohon Menunggu"
      );
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setAddressData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <FormAddress onChange={handleAddressChange} />;
      case 1:
        return <Review />;
      case 2:
        return <FormPayment />;
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container
        className="ContainerCheckout"
        component="main"
        maxWidth="sm"
        sx={{ mb: 4 }}
      >
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Form Pesanan
          </Typography>
          <div className="ContainerCheckout__stepper">
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Terima Kasih Atas Pesanan Anda.
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CheckCircleIcon
                  sx={{ fontSize: 150, color: "green", mt: 1, mb: 4 }}
                />
              </div>
              <Typography variant="subtitle1">
                Pesanan Anda sedang kami Proses, Kami akan melakukan pembaruan
                saat pesanan Anda telah dikirim.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                <div className="ContainerCheckout__btn-before">
                  <button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Sebelumnya
                  </button>
                 </div>
                )}
              <div className="ContainerCheckout__btn">
                <button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1
                    ? "Konfirmasi"
                    : "Selanjutnya"}
                </button>
              </div>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
      <Toaster />
    </ThemeProvider>
  );
};

export default CheckoutPage;
