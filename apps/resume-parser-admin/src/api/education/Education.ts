import { Resume } from "../resume/Resume";

export type Education = {
  createdAt: Date;
  fieldOfStudy: string | null;
  fromMonth: string | null;
  fromYear: string | null;
  id: string;
  institutionName: string | null;
  resume?: Resume | null;
  toMonth: string | null;
  toYear: string | null;
  typeField: string | null;
  updatedAt: Date;
};
