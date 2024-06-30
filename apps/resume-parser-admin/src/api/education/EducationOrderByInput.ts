import { SortOrder } from "../../util/SortOrder";

export type EducationOrderByInput = {
  createdAt?: SortOrder;
  fieldOfStudy?: SortOrder;
  fromMonth?: SortOrder;
  fromYear?: SortOrder;
  id?: SortOrder;
  institutionName?: SortOrder;
  resumeId?: SortOrder;
  toMonth?: SortOrder;
  toYear?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
