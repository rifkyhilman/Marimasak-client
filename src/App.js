import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header';
import HomePage from './pages/HomePage';
// import Footer from './Components/Footer';
import './Styles/index.scss';
import './Styles/Responsive.scss';


const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/detail/:id' element={<DetailResepPage />} />
        <Route path='/kategori/:daerah' element={<KategoriDaerahPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
