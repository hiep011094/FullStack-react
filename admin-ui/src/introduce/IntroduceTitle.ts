import { Introduce as TIntroduce } from "../api/introduce/Introduce";

export const INTRODUCE_TITLE_FIELD = "title";

export const IntroduceTitle = (record: TIntroduce): string => {
  return record.title || record.id;
};
