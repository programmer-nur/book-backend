import { Model } from 'mongoose';

export type IBook = {
  title: string;
  author: string;
  genre: string;
  thumbnail: string;
  publicationDate: Date;
};

export type BookModel = Model<IBook, Record<string, unknown>>;
