import React from "react";
import ImageEmpty from '../Assets/EmptyCart.svg';
import '../Styles/EmptyCart.scss';

const EmptyCart = () => {
    return (
    <div className="EmptyContainer">
        <div className="EmptyContainer__Content">
            <img src={ImageEmpty} alt="keranjang Kosong" />
            <div className="EmptyContainer__Content__description">
                <p>Daftar Keranjang Masing Kosong...</p>
            </div>
        </div>
    </div>
    );
};

export default EmptyCart;