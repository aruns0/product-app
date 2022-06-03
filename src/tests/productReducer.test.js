import * as reducer from "../redux/reducers/productReducer";
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
    reducer.productReducer(initialState, {
      type: SET_PRODUCTS,
      payload: expectedProducts,
    })
  ).toEqual(output);
});
