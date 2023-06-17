import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import FormAddress from '../Components/FormAddress';
import PaymentMethod from '../Components/PaymentMethod';
import '../Styles/CheckoutPage.scss';

// import Komponent dari MUI5
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const steps = ['Alamat Tujuan', 'Metode Pembayaran'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FormAddress />;
    case 1:
      return <PaymentMethod />;
    default:
      throw new Error('Unknown step');
  }
}


const defaultTheme = createTheme();

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const { id } = useParams();
  const getDataItem = JSON.parse(localStorage.getItem('cartItems'));

  const filterData = getDataItem.filter((item) => {
    return item.id !== id;
  })

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleCheckout = () => {
    localStorage.setItem("cartItems", JSON.stringify(filterData));
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container className='ContainerCheckout' component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Proses Check-out 
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
            <div>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Kembali
                  </Button>
                )}
                {activeStep === steps.length - 1 ?    
                <Button
                  variant="contained"
                  onClick={handleCheckout}
                  sx={{ mt: 3, ml: 1 }}
                > Bayar </Button>
                :            
                <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
                > Lanjut </Button>
              }
              </Box>
            </div>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default CheckoutPage;