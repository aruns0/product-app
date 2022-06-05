import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./containers/HeaderComponent";
import HomeComponent from "./containers/HomeComponent";
import FooterComponent from "./containers/FooterComponent";
import ProductsListComponent from "./containers/ProductsListComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<HomeComponent />}></Route>
            <Route path="/products" element={<ProductsListComponent />}></Route>
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
