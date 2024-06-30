import { EducationUpdateManyWithoutResumesInput } from "./EducationUpdateManyWithoutResumesInput";
import { ExperienceUpdateManyWithoutResumesInput } from "./ExperienceUpdateManyWithoutResumesInput";
import { LanguageUpdateManyWithoutResumesInput } from "./LanguageUpdateManyWithoutResumesInput";

export type ResumeUpdateInput = {
  educationList?: string | null;
  educations?: EducationUpdateManyWithoutResumesInput;
  emailAddress?: string | null;
  experienceList?: string | null;
  experiences?: ExperienceUpdateManyWithoutResumesInput;
  firstName?: string | null;
  languages?: LanguageUpdateManyWithoutResumesInput;
  lastName?: string | null;
  phoneNumber?: string | null;
  resumeHash?: string | null;
};
