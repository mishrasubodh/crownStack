import { Document } from "mongoose";

export default interface ICurrencyModel extends Document {
  createdAt: Date;
  deletedAt?: Date;
  currency: string;
}

