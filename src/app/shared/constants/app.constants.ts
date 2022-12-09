export enum URL {
  MAIN_PAGE = '/',
  LOGIN = '/logn',
  SIGN_UP = '/register',
  BUILDER = '/builder',
  BUILDER_PERSONAL_DETAILS = '/builder/personal-details',
  BUILDER_EXPERIANCE = '/builder/experience-details',
  BUILDER_TEMPLATE = '/builder/templates',
}

export enum ExperienceTitle {
  EDUCATION = 'Education and Qualifications',
  WORK = 'Work Experience',
}

export enum MONTHS {
  JANUARY = 'January',
  FEBRUARY = 'February',
  MARCH = 'March',
  APRIL = 'April',
  MAY = 'May',
  JUNE = 'June',
  JULY = 'July',
  AUGUST = 'August',
  SEPTEMBER = 'September',
  OCTOBER = 'October',
  NOVEMBER = 'November',
  DECEMBER = 'December',
}

export enum YEARS {
  '_1971' = 1970,
  '_1972',
  '_1973',
  '_1974',
  '_1975',
  '_1976',
  '_1977',
  '_1978',
  '_1979',
  '_1980',
  '_1981',
  '_1982',
  '_1983',
  '_1984',
  '_1985',
  '_1986',
  '_1987',
  '_1988',
  '_1989',
  '_1990',
  '_1991',
  '_1992',
  '_1993',
  '_1994',
  '_1995',
  '_1996',
  '_1997',
  '_1998',
  '_1999',
  '_2000',
  '_2001',
  '_2002',
  '_2003',
  '_2004',
  '_2005',
  '_2006',
  '_2007',
  '_2008',
  '_2009',
  '_2010',
  '_2011',
  '_2012',
  '_2013',
  '_2014',
  '_2015',
  '_2016',
  '_2017',
  '_2018',
  '_2019',
  '_2020',
  '_2021',
  '_2022',
  '_2023',
  '_2024',
  // '_2025',
  // '_2026',
  // '_2027',
  // '_2028',
  // '_2029',
  // '_2030',
}

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
