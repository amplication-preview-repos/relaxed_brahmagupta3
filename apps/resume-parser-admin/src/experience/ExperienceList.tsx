import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { RESUME_TITLE_FIELD } from "../resume/ResumeTitle";

export const ExperienceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Experiences"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="companyName" source="companyName" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="currentJob" source="currentJob" />
        <TextField label="fromMonth" source="fromMonth" />
        <TextField label="fromYear" source="fromYear" />
        <TextField label="ID" source="id" />
        <TextField label="jobResponsibilities" source="jobResponsibilities" />
        <TextField label="jobTitle" source="jobTitle" />
        <ReferenceField label="Resume" source="resume.id" reference="Resume">
          <TextField source={RESUME_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="toMonth" source="toMonth" />
        <TextField label="toYear" source="toYear" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
