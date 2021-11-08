import { MenuFooter as TMenuFooter } from "../api/menuFooter/MenuFooter";

export const MENUFOOTER_TITLE_FIELD = "title";

export const MenuFooterTitle = (record: TMenuFooter): string => {
  return record.title || record.id;
};
