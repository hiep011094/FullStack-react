import { JsonValue } from "type-fest";

export type IntroduceUpdateInput = {
  description?: string | null;
  images?: JsonValue | null;
  title?: string | null;
};
