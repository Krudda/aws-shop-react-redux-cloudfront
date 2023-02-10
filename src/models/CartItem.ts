import { Movie } from "~/models/Product";

export type CartItem = {
  product: Movie;
  count: number;
};
