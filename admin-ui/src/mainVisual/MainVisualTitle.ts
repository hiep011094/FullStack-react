import { MainVisual as TMainVisual } from "../api/mainVisual/MainVisual";

export const MAINVISUAL_TITLE_FIELD = "title";

export const MainVisualTitle = (record: TMainVisual): string => {
  return record.title || record.id;
};
