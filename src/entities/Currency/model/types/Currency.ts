export const Currency = {
  RUB: 'RUB',
  EUR: 'EUR',
  USD: 'USD'
} as const;

export type CurrencyType = typeof Currency[keyof typeof Currency];
