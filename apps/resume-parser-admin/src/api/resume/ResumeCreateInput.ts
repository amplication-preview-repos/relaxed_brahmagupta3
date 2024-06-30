import { EducationCreateNestedManyWithoutResumesInput } from "./EducationCreateNestedManyWithoutResumesInput";
import { ExperienceCreateNestedManyWithoutResumesInput } from "./ExperienceCreateNestedManyWithoutResumesInput";
import { LanguageCreateNestedManyWithoutResumesInput } from "./LanguageCreateNestedManyWithoutResumesInput";

export type ResumeCreateInput = {
  educationList?: string | null;
  educations?: EducationCreateNestedManyWithoutResumesInput;
  emailAddress?: string | null;
  experienceList?: string | null;
  experiences?: ExperienceCreateNestedManyWithoutResumesInput;
  firstName?: string | null;
  languages?: LanguageCreateNestedManyWithoutResumesInput;
  lastName?: string | null;
  phoneNumber?: string | null;
  resumeHash?: string | null;
};
