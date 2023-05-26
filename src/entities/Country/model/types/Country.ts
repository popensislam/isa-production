export const Country = {
  Russia: 'Russia',
  Belarus: 'Belarus',
  Ukraine: 'Ukraine',
  Armenia: 'Armenia',
  Kyrgyztan: 'Kyrgyztan'
} as const;

export type CountryType = typeof Country[keyof typeof Country];
