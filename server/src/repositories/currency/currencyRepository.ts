import { Nullable } from "../../libs/Nullable";
import { currencyModel } from "./currencyModel";
import ICurrencyModel from "./ICurrencyModel";

export default class CurrencyRepository {
  /**
   * Get currency
   */
  public async getCurrencies(): Promise<Nullable<ICurrencyModel>> {
    return currencyModel.find({}).lean();
  }
}
