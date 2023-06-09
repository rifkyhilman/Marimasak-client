import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import DetailRecepPage from './Pages/DetailRecepPage';
import CartPage from './Pages/CartPage';
import CategoriePage from './Pages/CategoriePage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import Footer from './Components/Footer';

import './Styles/index.scss';
import './Styles/Responsive.scss';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/keranjang' element={<CartPage />} />
        <Route path='/detail/:id' element={<DetailRecepPage />} />
        <Route path='/categorie/:daerah' element={<CategoriePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
