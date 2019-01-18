import { beverages } from "./digest";
import { normalizeBeverages } from "./utils/normalizr";

export const getBeverages = () =>
  Promise.resolve(normalizeBeverages(beverages));
