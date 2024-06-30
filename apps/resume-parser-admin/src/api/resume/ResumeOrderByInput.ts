import { SortOrder } from "../../util/SortOrder";

export type ResumeOrderByInput = {
  createdAt?: SortOrder;
  educationList?: SortOrder;
  emailAddress?: SortOrder;
  experienceList?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  resumeHash?: SortOrder;
  updatedAt?: SortOrder;
};
