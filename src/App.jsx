
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Header from "./Static/Header/Header";
import Footer from "./Static/Footer/Footer";
import Products from './pages/Products';
import Help from './pages/Help';
import Company from './pages/Company';
import Business from './pages/Business';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage /> } />
        <Route path="/products" component={<Products />} />
        <Route path="/help" component={<Help/>} />
        <Route path="/company" component={<Company/>} />
        <Route path="/business" component={<Business/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
