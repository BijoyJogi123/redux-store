import './App.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
   <>
      <BrowserRouter >
      <Header />
      {/* <div style={{"margin-top":"50px"}}> */}
        <Routes>
        
          <Route exact path="/" element={<ProductListing/>}/>
          <Route  path="/product/:productId" element={<ProductDetails/>}/>
          <Route>404 Not Found</Route>
        </Routes>
        {/* </div> */}
      </BrowserRouter>



   </>
  );
}

export default App;
