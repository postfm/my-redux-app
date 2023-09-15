export const REFERENCE_YEAR = 2020;

export enum NameSpace {
  User = 'USER',
  Page = 'PAGE',
}

export type TPage = {
  year: number;
  photos: string[];
  isFetching: boolean;
};

export type TUser = {
  user: string;
};
