export const Currency = {
  RUB: 'RUB',
  EUR: 'EUR',
  USD: 'USD'
} as const;

export type CurrencyType = typeof Currency[keyof typeof Currency]


export const Country = {
  Russia: 'Russia',
  Belarus: 'Belarus',
  Ukraine: 'Ukraine',
  Armenia: 'Armenia',
  Kyrgyztan: 'Kyrgyztan'
} as const;

export type CountryType = typeof Country[keyof typeof Country]
