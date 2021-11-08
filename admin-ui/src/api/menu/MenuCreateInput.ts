import { JsonValue } from "type-fest";

export type MenuCreateInput = {
  slug?: string | null;
  subMenu?: JsonValue | null;
  title?: string | null;
};
