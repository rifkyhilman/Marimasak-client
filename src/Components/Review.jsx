import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import "../Styles/FormReview.scss";

const Review = () => {
  const selectedItems = JSON.parse(localStorage.getItem("selectedItems"));
  const addressData = JSON.parse(localStorage.getItem("addressData"));

  const calculateTotal = () => {
    let total = 0;
    selectedItems.forEach((item) => {
      total += item.harga * item.quantity;
    });
    total += 9000;

    localStorage.setItem("total", total.toString());

    return total;
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        List Pesanan
      </Typography>
      <List disablePadding>
        {selectedItems.map((item) => (
          <div className="review__item" key={item.id}>
            <img
              className="review__image"
              src={item.pictureUrl}
              alt={item.nama_resep}
            />
            <div>
              <p className="review__nama">
                <span>Nama Resep:</span> {item.nama_resep}
              </p>
              <p className="review__harga">
                <span>Harga Satuan:</span>{" "}
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                }).format(item.harga)}
              </p>
              <p className="review__jumlah">
                <span>Jumlah Item:</span> {item.quantity}
              </p>
            </div>
          </div>
        ))}
        <div className="review__summary">
          <p>
            <span>Ekspedisi: </span> JNE REG (<em>Diterima dalam 2 - 4 hari</em>
            ){" "}
          </p>
          <p>
            <span>Ongkos Kirim:</span>{" "}
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(9000)}
          </p>
          <p>
            <span>Total:</span>{" "}
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(calculateTotal())}
          </p>
        </div>
      </List>

      <Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detail Pengiriman
          </Typography>
          <div className="review__pengiriman">
            <p>
              <span>Nama:</span> {addressData?.firstName}{" "}
              {addressData?.lastName}
            </p>
            <p>
              <span>Alamat Lengkap:</span> {addressData?.address} - Kota{" "}
              {addressData?.city}, Provinsi {addressData?.state}, Kecamatan{" "}
              {addressData?.country}, Kode Pos {addressData?.zip}
            </p>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Review;
