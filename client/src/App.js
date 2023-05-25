import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Footer from './Components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
