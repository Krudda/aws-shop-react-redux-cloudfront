import { Movie } from "~/models/Product";

export type CartItem = {
  product: Partial<Movie>;
  count?: number;
};
