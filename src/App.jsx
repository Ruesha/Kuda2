
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Header from "./Static/Header/Header";
import Footer from "./Static/Footer/Footer";
import Products from './pages/Products';
import Help from './pages/Help';
import Company from './pages/Company';
import Business from './pages/Business';
import Api from './pages/api';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage /> } />
        <Route path="/products" element={<Products />} />
        <Route path="/help" element={<Help/>} />
        <Route path="/company" element={<Company/>} />
        <Route path="/business" element={<Business/>} />
        <Route path="/api" element={<Api/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
