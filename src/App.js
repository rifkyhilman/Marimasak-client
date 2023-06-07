import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './pages/HomePage';
import TentangPage from './pages/TentangPage';
import DetailResepPage from './pages/DetailResepPage';
import Footer from './Components/Footer';
import './Styles/index.scss';
import './Styles/Responsive.scss';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/tentang' element={<TentangPage />} />
        <Route path='/detail/:id' element={<DetailResepPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
