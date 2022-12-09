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
  work: IWorkDetails[];
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

export interface IWorkDetails {
  id: string;
  jobTitle?: string;
  city?: string;
  employer?: string;
  startDateMonth?: string;
  startDateYear?: string;
  endDateMonth?: string;
  endDateYear?: string;
  responsibilities?: string;
}

export interface IExperienceItem {
  id: string;
  title?: string;
  startDateMonth?: string;
  startDateYear?: string;
  endDateMonth?: string;
  endDateYear?: string;
}
