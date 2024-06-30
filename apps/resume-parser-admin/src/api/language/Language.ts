import { Resume } from "../resume/Resume";

export type Language = {
  createdAt: Date;
  id: string;
  language: string | null;
  resume?: Resume | null;
  updatedAt: Date;
};
