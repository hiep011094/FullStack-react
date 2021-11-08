import { Menu as TMenu } from "../api/menu/Menu";

export const MENU_TITLE_FIELD = "title";

export const MenuTitle = (record: TMenu): string => {
  return record.title || record.id;
};
