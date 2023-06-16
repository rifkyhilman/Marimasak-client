import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataResepContext } from "../Contexts/DataResepContext";
import "../Styles/DetailRecep.scss";
import toastDetail, { Toaster } from "react-hot-toast";

const DetailRecep = () => {
  const { id } = useParams();
  const isLoggin = localStorage.getItem("Token");

  const { getDetailResep } = useContext(DataResepContext);

  const [DataResep, setDataResep] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }

    (async function () {
      const data = await getDetailResep(id);
      setDataResep(data);
    })();
  }, [getDetailResep, id]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = () => {
    const existingItem = cartItems.find((item) => item.id === DataResep.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === DataResep.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...DataResep, quantity: 1 }]);
    }

    toastDetail.success("Bahan Makananmu Sudah Di Keranjang");
  };

  if (!DataResep) return <h1>Loading...</h1>;

  return (
    <div className="ContainerDetail">
      <Toaster />
      <div className="ContainerDetail__card">
        <div className="ContainerDetail__card__image">
          <img src={DataResep.pictureUrl} alt="" />
        </div>
        <div className="ContainerDetail__card__content">
          <h1>{DataResep.nama_resep}</h1>
          <p>
            Merupakan Makanan Khas dari Provinsi {DataResep.kategori_daerah},
            dengan tingkat kesuilat membuat makanan ini yang cukup{" "}
            {DataResep.tingkat_kesulitan} untuk dibuat, dan memakan waktu
            pembuatan selama {DataResep.waktu_pembuatan}.
          </p>
        </div>
      </div>
      <div className="ContainerDetail__Content">
        <div className="ContainerDetail__Content__bahan-makanan">
          <div className="ContainerDetail__Content__bahan-makanan__title">
            <h2>Bahan Makanan</h2>
          </div>
          <div className="ContainerDetail__Content__bahan-makanan__content">
            {DataResep.bahan_makanan.map((bh) => {
              return (
                <div key={bh.item}>
                  <p>{bh.item}</p>
                </div>
              );
            })}
          </div>
          {isLoggin ? (
            <div className="ContainerDetail__Content__harga">
              <p>
                Harga Satuan:{" "}
                {Number(DataResep.harga).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
          ) : null}

          {isLoggin ? (
            <div className="ContainerDetail__Content__btn-cart">
              <button onClick={addToCart}>Beli Bahan Makanan</button>
            </div>
          ) : null}
        </div>
        <div className="ContainerDetail__Content__pembuatan-makanan">
          <div className="ContainerDetail__Content__pembuatan-makanan__title">
            <h2>Cara Pembuatan</h2>
          </div>
          <ol>
            {DataResep.cara_pembuatan.map((cp) => {
              return <li key={cp.item}>{cp.item}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DetailRecep;
