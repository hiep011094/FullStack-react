import { JsonValue } from "type-fest";

export type MenuUpdateInput = {
  slug?: string | null;
  subMenu?: JsonValue | null;
  title?: string | null;
};
