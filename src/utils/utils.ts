import { cardType } from '@/enum/card';
import { Currency, CurrencyCountry } from '@/enum/transaction';

export default class Utils {
  static getCardType(id: string): string {
    return cardType[id];
  }

  static getCurrency(country: CurrencyCountry): string {
    return Currency[country];
  }
}
