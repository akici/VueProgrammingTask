import { Transaction } from '@/ApiClient/data/model/Transaction';

export interface CardTransaction {
  [key: string]: Transaction[];
}
