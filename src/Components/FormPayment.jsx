import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import QrCodeIcon from "@mui/icons-material/QrCode";
import "../Styles/FormPayment.scss";
import QRISLogo from "../Assets/logo-qris.jpeg";

const FormPayment = () => {
  const [isDownloadingQRIS, setIsDownloadingQRIS] = useState(false);

  const [showVirtualAccount, setShowVirtualAccount] = useState(false);
  const [showQRIS, setShowQRIS] = useState(false);
  const [isVirtualAccountButtonActive, setVirtualAccountButtonActive] =
    useState(true);
  const [isQRISButtonActive, setQRISButtonActive] = useState(true);
  const [countdown, setCountdown] = useState(0);
  const [virtualAccountNumber, setVirtualAccountNumber] = useState("");
  const [virtualAccountClicked, setVirtualAccountClicked] = useState(false);
  const [qrisClicked, setQrisClicked] = useState(false);
  const [totalPayment, setTotalPayment] = useState("");

  useEffect(() => {
    let intervalId;
    if (countdown > 0) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  const handleVirtualAccountClick = () => {
    if (!virtualAccountClicked) {
      setShowVirtualAccount(true);
      setShowQRIS(false);
      setQRISButtonActive(false);
      setCountdown(86400);
      generateVirtualAccountNumber();
      setVirtualAccountClicked(true);
    }
  };

  const handleQRISClick = () => {
    if (!qrisClicked) {
      setShowQRIS(true);
      setShowVirtualAccount(false);
      setVirtualAccountButtonActive(false);
      setCountdown(86400);
      generateVirtualAccountNumber();
      setQrisClicked(true);
    }
  };

  const handleDownloadQRIS = () => {
    setIsDownloadingQRIS(true);
    downloadURI(QRISLogo, "qris.jpeg");
  };

  const downloadURI = (uri, name) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generateVirtualAccountNumber = () => {
    const randomNumber = Math.floor(
      1000000000000000 + Math.random() * 9000000000000000
    );
    setVirtualAccountNumber(randomNumber.toString());
  };

  useEffect(() => {
    const total = localStorage.getItem("total");
    setTotalPayment(total);
  }, []);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(value);
  };

  const adminFee = 2500;
  const totalTransfer = Number(totalPayment) + adminFee;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Pilih Metode Pembayaran
      </Typography>

      <div className="PaymentOptionsContainer">
        <div className="PaymentOption">
          <Button
            variant="outlined"
            className="PaymentButton"
            onClick={handleVirtualAccountClick}
            disabled={!isVirtualAccountButtonActive || virtualAccountClicked}
          >
            <div className="PaymentButtonIcon">
              <AccountBalanceIcon />
            </div>
            <div>
              <Typography variant="subtitle1" className="PaymentButtonHeading">
                Virtual Account
              </Typography>
              <Typography variant="body2">
                Transfer dengan cepat ke akun bank Virtual BCA
              </Typography>
            </div>
          </Button>
          {showVirtualAccount && (
            <div className="PaymentDetails">
              <Typography variant="subtitle2">
                <span>Transfer Sebelum:</span> {Math.floor(countdown / 3600)}{" "}
                jam {Math.floor((countdown % 3600) / 60)} menit {countdown % 60}{" "}
                detik
              </Typography>
              <Typography variant="subtitle2">
                <span>No. Virtual Account:</span> {virtualAccountNumber}
              </Typography>
              <Typography variant="subtitle2">
                <span>Total Pembayaran:</span> {formatCurrency(totalPayment)}
              </Typography>
              <Typography variant="subtitle2">
                <span>Biaya Admin:</span> {formatCurrency(adminFee)}
              </Typography>
              <Typography variant="subtitle2">
                <span>Jumlah Yang Harus di Transfer:</span>{" "}
                {formatCurrency(totalTransfer)}
              </Typography>
            </div>
          )}
        </div>
      </div>

      <div className="PaymentOptionsContainer">
        <div className="PaymentOption">
          <Button
            variant="outlined"
            className="PaymentButton"
            onClick={handleQRISClick}
            disabled={!isQRISButtonActive || qrisClicked}
          >
            <div className="PaymentButtonIcon">
              <QrCodeIcon />
            </div>
            <div>
              <Typography variant="subtitle1" className="PaymentButtonHeading">
                QRIS
              </Typography>
              <Typography variant="body2">
                Pembayaran mudah dengan scan barcode QRIS
              </Typography>
            </div>
          </Button>
          {showQRIS && (
            <div className="PaymentDetails">
              <div className="QRCodeImage">
                <div className="QRCodeContainer">
                  <a href={QRISLogo} target="_blank" rel="noopener noreferrer">
                    <img src={QRISLogo} alt="QR Code" />
                  </a>
                </div>
              </div>
              <Button
                variant="outlined"
                className="DownloadQRButton"
                onClick={handleDownloadQRIS}
                disabled={isDownloadingQRIS}
              >
                {isDownloadingQRIS ? "QRIS Telah Di Unduh..." : "Download QRIS"}
              </Button>

              <Typography variant="subtitle2">
                <span>Transfer Sebelum:</span> {Math.floor(countdown / 3600)}{" "}
                jam {Math.floor((countdown % 3600) / 60)} menit {countdown % 60}{" "}
                detik
              </Typography>
              <Typography variant="subtitle2">
                <span>Total Pembayaran:</span> {formatCurrency(totalPayment)}
              </Typography>
              <Typography variant="subtitle2">
                <span>Biaya Admin:</span> GRATIS
              </Typography>
              <Typography variant="subtitle2">
                <span>Jumlah Yang Harus di Transfer:</span>{" "}
                {formatCurrency(totalPayment)}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormPayment;
