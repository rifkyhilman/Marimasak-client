import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageEmpty from "../Assets/EmptyCart.svg";
import "../Styles/Cart.scss";

const Cart = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    const storedSelectedItems = localStorage.getItem("selectedItems");

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }

    if (storedSelectedItems) {
      setSelectedItems(JSON.parse(storedSelectedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
  }, [selectedItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setSelectedItems(cartItems);
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
    setSelectedItems(updatedCartItems);
  };

  const handleCheckout = () => {
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));

    navigate("/checkout");
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

  const calculateTotalPayment = () => {
    const totalPayment = selectedItems.reduce(
      (accumulator, item) => accumulator + item.harga * item.quantity,
      0
    );
    return totalPayment.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  return (
    <div className="KeranjangContainer">
      <h1 className="top-tittle">Keranjang Saya</h1>
      <div className="cartList">
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
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="QuantityButton"
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className="SummaryContainer">
              <p>
                Subtotal:{" "}
                <span className="rp">
                  {calculateSubtotal(item.harga, item.quantity)}
                </span>
              </p>
            </div>
          </div>
        ))}
        <div className="cartList__footList">
          <p>
            Total Pembayaran <br />{" "}
            <span className="rp">{calculateTotalPayment()}</span>
          </p>
          <button className="cartList__CheckoutButton" onClick={handleCheckout}>
            Buat Pesanan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
