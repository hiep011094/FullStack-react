import { JsonValue } from "type-fest";

export type Introduce = {
  createdAt: Date;
  description: string | null;
  id: string;
  images: JsonValue | null;
  title: string | null;
  updatedAt: Date;
};
