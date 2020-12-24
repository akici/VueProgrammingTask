import { cardType } from '@/enum/cardType';

export default class Utils {
  static getCardType(id: string): string {
    return cardType[id];
  }
}
