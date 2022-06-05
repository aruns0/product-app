import * as reducer from "../redux/reducers/productsReducer";
import { getProducts } from "../services/productService";
let SET_PRODUCTS = "SET_PRODUCTS";
const initialState = {
  products: [],
};

test("productReduces", async () => {
  const record = await getProducts();
  const expectedProducts = record.data.products;
  const output = { products: expectedProducts };
  expect(
    reducer.productsReducer(initialState, {
      type: SET_PRODUCTS,
      payload: expectedProducts,
    })
  ).toEqual(output);
});
