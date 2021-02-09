import CurrencyRepository from "../../repositories/currency/currencyRepository";

class CurrencyController {
  private currencyRepository: CurrencyRepository;

  constructor() {
    this.currencyRepository = new CurrencyRepository();
  }

  private async getCurrencies(): Promise<any> {
    const currencies = await this.currencyRepository.getCurrencies();
    return currencies;
  }
}

export default new CurrencyController();
