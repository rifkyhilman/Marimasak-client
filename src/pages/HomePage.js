import React from 'react';
import Hero from '../Components/Hero';


const HomePage = () => {
  return (
    <>
    <Hero />
      <div className='container'> 
        <h1>Resep Masakan</h1>
        <p>Inilah tempatnya segala resep masakan enak! MAHI 
          telah siapkan beragam hidangan seru bergaya rumahan, 
          tepat sebagai masakan sehari-hari.</p>
      </div>
    </>
  );
}

export default HomePage;