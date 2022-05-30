import _ from "lodash";
export const paginate = (totalProducts, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(totalProducts).slice(startIndex).take(pageSize).value();
};
