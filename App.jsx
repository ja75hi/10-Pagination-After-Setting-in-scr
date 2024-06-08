
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Layouts/Footer';

import Header from './Components/Layouts/Header';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './Components/product/ProductDetail';


function App() {
  return (
    <Router>
      <div className="App">
        <HelmetProvider>
          <Header/>
          <div className='container container-fluid' >

            <ToastContainer theme='dark'  />
            <Routes>
              <Route path='/' element={<Home/>} /> 
              <Route path='/product/:id' element={<ProductDetail />} /> 
            </Routes> 
            
          </div>
            
          <Footer/>
        </HelmetProvider>
      </div>

    </Router>
  );
}

export default App;
