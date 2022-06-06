import * as reducer from "../redux/reducers/productsReducer";
import { getProducts } from "../services/productService";
let SET_PRODUCTS = "SET_PRODUCTS";
const initialState = {
  products: [],
};

test("productReduces", async () => {
  const expectedProducts = {
    products: [
      {
        id: 1,
        name: "Super Star Shoes",
        brand: "adidas",
        size: 10,
        colour: "White",
        price: 100.0,
        url: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/97c6dbb89d7f45c6aa84ae9300982865_9366/adistound-m.jpg",
      },
      {
        id: 2,
        name: "Rising Star Shoes",
        brand: "adidas",
        size: 9,
        colour: "White",
        price: 200.0,
        url: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea720c6167a744728259ae8c0145f2e3_9366/adistound-m.jpg",
      },
      {
        id: 3,
        name: "Forum Low Shoes",
        brand: "reebok",
        size: 11,
        colour: "black",
        price: 200.0,
        url: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/c2bb99d06e0e48f8922badd0007d82e2_9366/zan-trail.jpg",
      },
      {
        id: 4,
        name: "Street Ball Shoes",
        brand: "reebok",
        size: 10,
        colour: "black",
        price: 200.0,
        url: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f97d6b1d03544f138acdae8f0134366e_9366/gallivantor-m.jpg",
      },
      {
        id: 5,
        name: "Foot Ball Shoes",
        brand: "reebok",
        size: 7,
        colour: "black",
        price: 200.0,
        url: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/895a0a08488246f9b326ae8f013aace1_9366/apexo-m.jpg",
      },
      {
        id: 6,
        name: "Kids  Shoes",
        brand: "adidas",
        size: 7,
        colour: "black",
        price: 200.0,
        url: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d6d3e9caa4f84b5cb176ae8f012e4cf1_9366/flydoot-m.jpg",
      },
      {
        id: 7,
        name: "Girls  Shoes",
        brand: "reebok",
        size: 8,
        colour: "black",
        price: 200.0,
        url: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/07836c9f58a6409793eaae8c0126e9af_9366/runmagica-m.jpg",
      },
      {
        id: 8,
        name: "Boys  Shoes",
        brand: "reebok",
        size: 8,
        colour: "black",
        price: 200.0,
        url: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/89d2639bae744b34aa00ae8f013238e6_9366/court-rage-m.jpg",
      },
    ],
    total_records: 28,
    page_limit: "8",
  };
  const output = { products: expectedProducts };
  expect(
    reducer.productsReducer(initialState, {
      type: SET_PRODUCTS,
      payload: expectedProducts,
    })
  ).toEqual(output);
});
