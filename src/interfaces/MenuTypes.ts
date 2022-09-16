export type RedirectLink = {
  title: string;
  url: string;
};
export type Submenu = {
  title: string;
  url?: string;
  submenu?: {
    title: string;
    url: string;
  }[];
};
export type MenuItemProp = {
  title: string;
  url: string;
  submenu?: (RedirectLink | Submenu)[];
};
