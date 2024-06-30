import { SortOrder } from "../../util/SortOrder";

export type ExperienceOrderByInput = {
  companyName?: SortOrder;
  createdAt?: SortOrder;
  currentJob?: SortOrder;
  fromMonth?: SortOrder;
  fromYear?: SortOrder;
  id?: SortOrder;
  jobResponsibilities?: SortOrder;
  jobTitle?: SortOrder;
  resumeId?: SortOrder;
  toMonth?: SortOrder;
  toYear?: SortOrder;
  updatedAt?: SortOrder;
};
