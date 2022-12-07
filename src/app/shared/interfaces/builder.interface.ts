export interface IPersonalDetails {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  code?: string;
}

export interface IExperienceDetails {
  education: IEducationDetails[];
  work: [];
}

export interface IEducationDetails {
  id: string;
  degree?: string;
  city?: string;
  school?: string;
  startDateMonth?: string;
  startDateYear?: string;
  endDateMonth?: string;
  endDateYear?: string;
  details?: string;
}

export interface IExperienceItem {
  id: string;
  title: string;
  startDateMonth: string | undefined;
  startDateYear: string | undefined;
  endDateMonth: string | undefined;
  endDateYear: string | undefined;
}
