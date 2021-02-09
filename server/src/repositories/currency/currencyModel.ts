import * as mongoose from "mongoose";

import ICurrencyModel from "./ICurrencyModel";
import CurrencySchema from "./CurrencySchema";

/**
 * Notification Schema
 */
const currencySchema = new CurrencySchema(
  {
    _id: String
  },
  {
    collection: "currencies",
    versionKey: false
  }
);

/**
 * @typedef Currency
 */
export const currencyModel: mongoose.Model<ICurrencyModel> = mongoose.model<ICurrencyModel>("Currency", currencySchema);
