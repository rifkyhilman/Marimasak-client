import * as React from 'react';
import { Payments } from '../Utility/PaymentMethod';
import '../Styles/PaymentMethod.scss';

const PaymentMethod = () => {
  return (
    <div className='ContainerPayment'>
      {Payments.map((item) => (
        <div key={item.id} className="ContainerPayment__cards">
          <div className="ContainerPayment__cards__logo">
            <img src={item.image} alt={item.nama} />
          </div>
          <div className="ContainerPayment__cards__title">
            <h2>{item.nama}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PaymentMethod;