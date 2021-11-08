import { New as TNew } from "../api/new/New";

export const NEW_TITLE_FIELD = "title";

export const NewTitle = (record: TNew): string => {
  return record.title || record.id;
};
