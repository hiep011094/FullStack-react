import { HotLine as THotLine } from "../api/hotLine/HotLine";

export const HOTLINE_TITLE_FIELD = "title";

export const HotLineTitle = (record: THotLine): string => {
  return record.title || record.id;
};
