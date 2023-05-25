import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../Components/Product';

const Home = () => {

  const { products } = useContext(ProductContext);
  // const filterProducts = products.filter((item) => {
  //   return (
  //     item.kategori_daerah === "Lampung"
  //   )
  // })

  return <div>
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 
        lg:gris-cols-4 xl:grid-cols-5 gap-[30px]
        max-w-sm mx-auto md:mx-w-none md:mx-0'>
          {products.map(product => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  </div>;
};

export default Home;
