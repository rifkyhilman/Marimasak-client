import React, { useEffect, useState } from "react";
import ImageEmpty from "../Assets/EmptyCart.svg";
import "../Styles/Cart.scss";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (itemId, newQuantity) => {
    let updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    updatedCartItems = updatedCartItems.filter((item) => item.quantity > 0);

    setCartItems(updatedCartItems);
  };

  const handleCheckout = () => {
    
  };

  if (cartItems.length === 0) {
    return (
      <div className="EmptyContainer">
        <div className="EmptyContainer__Content">
          <img src={ImageEmpty} alt="keranjang Kosong" />
          <div className="EmptyContainer__Content__description">
            <p>Daftar Keranjang Anda Kosong</p>
          </div>
        </div>
      </div>
    );
  } 

  const calculateSubtotal = (price, quantity) => {
    const subtotal = price * quantity;
    return subtotal.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };
  
  return (
    <div className="KeranjangContainer">
      <h1 className="top-tittle">Keranjang Saya</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="CartItem">
          <div className="CartItem__image">
            <img src={item.pictureUrl} alt={item.nama_resep} />
          </div>
          <div className="CartItem__content">
            <h2>Paket Bahan Makanan ({item.nama_resep})</h2>
            <p>
              Harga Satuan:{" "}
              {Number(item.harga).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            <div className="CartItem__quantity">
              <button
                className="QuantityButton"
                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="QuantityButton"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="SummaryContainer">
            <p>Subtotal: {calculateSubtotal(item.harga, item.quantity)}</p>
            <button className="CheckoutButton" onClick={handleCheckout}>
              Beli Sekarang
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
