import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Resgister';
import Footer from './Components/Footer';
import './Styles/index.scss'
import './Styles/responsive.scss'


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ProductDetail />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
