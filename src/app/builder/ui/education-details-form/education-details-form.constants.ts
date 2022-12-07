import { MONTHS, YEARS } from 'src/app/shared/constants/app.constants';

export const MonthSelectItems = [
  { name: 'Month', value: '' },
  ...Object.values(MONTHS).map((value) => ({
    name: value,
    value: value,
  })),
];

export const YearSelectItems = [
  { name: 'Year', value: '' },
  ...Object.values(YEARS)
    .filter((x) => !isNaN(Number(x)))
    .reverse()
    .map((value) => ({
      name: value as string,
      value: value as string,
    })),
];
