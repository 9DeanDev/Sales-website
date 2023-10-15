import './App.css';
import BodyContent from './components/BodyHome/BodyContent';
import Header from './components/Header/Header';
import ModalAccount from './components/Modal/ModalAccount';
import ModalProduct from './components/Modal/ModalProduct';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from './views/ProductDetails/ProductDetails';
import Home from './views/Home/Home';
import Astra from './views/Astra/Astra';

function App() {
  return (
    <BrowserRouter>
      <div className="App container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Astra" element={<Astra />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
