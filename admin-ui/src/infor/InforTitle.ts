import { Infor as TInfor } from "../api/infor/Infor";

export const INFOR_TITLE_FIELD = "title";

export const InforTitle = (record: TInfor): string => {
  return record.title || record.id;
};
