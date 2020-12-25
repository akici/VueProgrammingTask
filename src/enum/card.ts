enum CardTypeId {
  PRIVATE = 'lkmfkl-mlfkm-dlkfm',
  BUSINESS = 'elek-n3lk-4m3lk4',
}

enum CardTypeCssClass {
  PRIVATE = 'private-card',
  BUSINESS = 'business-card',
}

export const cardType: {[key: string]: string} = {
  [CardTypeId.PRIVATE]: CardTypeCssClass.PRIVATE,
  [CardTypeId.BUSINESS]: CardTypeCssClass.BUSINESS,
};
