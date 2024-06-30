import { Education } from "../education/Education";
import { Experience } from "../experience/Experience";
import { Language } from "../language/Language";

export type Resume = {
  createdAt: Date;
  educationList: string | null;
  educations?: Array<Education>;
  emailAddress: string | null;
  experienceList: string | null;
  experiences?: Array<Experience>;
  firstName: string | null;
  id: string;
  languages?: Array<Language>;
  lastName: string | null;
  phoneNumber: string | null;
  resumeHash: string | null;
  updatedAt: Date;
};
