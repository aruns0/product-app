import { setProducts } from "../redux/actions/productActions";
import { getProducts } from "../services/productService";
let SET_PRODUCTS = "SET_PRODUCTS";
test("Products Action", async () => {
  const expectedProducts = await getProducts();
  const expectedAction = {
    type: SET_PRODUCTS,
    payload: expectedProducts.data.products,
  };
  expect(setProducts(expectedProducts.data.products)).toEqual(expectedAction);
});
