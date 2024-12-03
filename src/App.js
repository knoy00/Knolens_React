import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';

import LandingPage from "./Components/LandingPage";
import ProductPage from './Components/ProductPage';
import ProductOverview from './Components/ProductOverview';
import Cart from './Components/Cart';

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/Product' element={<ProductPage />}/>
        <Route path='/Product/:id' element={<ProductOverview />}/>
        <Route path='/Cart' element={<Cart />}/>
      </Routes>
    </Router>
  );
}

export default App;
