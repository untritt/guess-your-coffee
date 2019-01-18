import { normalize, schema } from "normalizr";

const ingredient = new schema.Entity("ingredients");
const beverage = new schema.Entity("beverages", {
  ingredients: [ingredient]
});

export const normalizeBeverages = data => normalize(data, [beverage]);
