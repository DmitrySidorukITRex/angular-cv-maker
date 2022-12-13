export interface ITemplateSidebarItem {
  label: string;
  value: string;
}

export interface ISectionItem {
  title: string;
  subTitle: string;
  date: string;
  info: string;
}

export interface ISection {
  name: string;
  items: ISectionItem[];
}
