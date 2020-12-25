export enum CurrencyCountry {
  Europe = 'euro',
}

export const Currency: {[key: string]: string} = {
  [CurrencyCountry.Europe]: '€',
};
