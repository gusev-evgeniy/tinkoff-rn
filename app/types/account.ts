export type CardType = 'Black' | 'All Airline';
export type Currency = 'USD' | 'RUB';

export type NewAccountProps = {
  type: CardType;
  currency: Currency;
};

export type AccountBase = {
  id: string;
  createdAt: number;
  updatedAt: number;
  type: CardType;
  currency: Currency;
  cash: number;
  cardNumber: string;
  userId: string;
};
