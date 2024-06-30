import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { RESUME_TITLE_FIELD } from "../resume/ResumeTitle";

export const ExperienceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
