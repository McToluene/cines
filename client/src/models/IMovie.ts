import { IGenre } from "./IGenre";

export interface IMovie {
  _id: string;
  title: string;
  genre: IGenre;
  numberInStock: number;
  dailyRentalRate?: number;
  publishDate?: string;
  liked?: boolean;
  genreId?: string;
}
