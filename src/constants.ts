export enum NameSpace {
  User = 'USER',
  Page = 'PAGE',
}

export type Page = {
  year: number;
  photos: string[];
};

export type User = {
  user: string;
};
