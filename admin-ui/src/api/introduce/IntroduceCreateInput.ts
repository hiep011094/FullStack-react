import { JsonValue } from "type-fest";

export type IntroduceCreateInput = {
  description?: string | null;
  images?: JsonValue | null;
  title?: string | null;
};
