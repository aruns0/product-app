import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />}></Route>
          <Route
            path="/products/:productId"
            exact
            component={ProductDetail}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
