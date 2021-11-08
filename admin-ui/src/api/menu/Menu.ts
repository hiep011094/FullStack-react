import { JsonValue } from "type-fest";

export type Menu = {
  createdAt: Date;
  id: string;
  slug: string | null;
  subMenu: JsonValue | null;
  title: string | null;
  updatedAt: Date;
};
