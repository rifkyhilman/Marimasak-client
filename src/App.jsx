import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import './Styles/Responsive.scss';

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;