import { setProducts } from "./redux/actions/productActions";
//import {fetchProducts} from "./containers/"
let SET_PRODUCTS = "SET_PRODUCTS";

let expectedProducts = {
  products: [
    {
      product_id: 26,
      name: "Super Star Shoes",
      brand: "adidas",
      size: 10,
      colour: "White",
      price: 100.0,
      url: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/97c6dbb89d7f45c6aa84ae9300982865_9366/adistound-m.jpg",
    },
    {
      product_id: 27,
      name: "Rising Star Shoes",
      brand: "adidas",
      size: 9,
      colour: "White",
      price: 200.0,
      url: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea720c6167a744728259ae8c0145f2e3_9366/adistound-m.jpg",
    },
    {
      product_id: 28,
      name: "Forum Low Shoes",
      brand: "reebok",
      size: 11,
      colour: "black",
      price: 200.0,
      url: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/753592f0fb47491ba10cae8c01251118_9366/flydoot-m.jpg",
    },
    {
      product_id: 29,
      name: "Street Ball Shoes",
      brand: "reebok",
      size: 10,
      colour: "black",
      price: 200.0,
      url: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f97d6b1d03544f138acdae8f0134366e_9366/gallivantor-m.jpg",
    },
  ],
  total_records: 9,
  page_limit: "4",
};

describe("Products Action", () => {
  it("should create an action to fetch the products ", () => {
    // const SET_PRODUCTS = SET_PRODUCTS;
    const expectedAction = {
      type: SET_PRODUCTS,
      payload: expectedProducts,
    };
    expect(setProducts(expectedProducts)).toEqual(expectedAction);
  });
});
