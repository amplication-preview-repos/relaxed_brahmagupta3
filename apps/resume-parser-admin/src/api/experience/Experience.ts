import { Resume } from "../resume/Resume";

export type Experience = {
  companyName: string | null;
  createdAt: Date;
  currentJob: boolean | null;
  fromMonth: string | null;
  fromYear: string | null;
  id: string;
  jobResponsibilities: string | null;
  jobTitle: string | null;
  resume?: Resume | null;
  toMonth: string | null;
  toYear: string | null;
  updatedAt: Date;
};
