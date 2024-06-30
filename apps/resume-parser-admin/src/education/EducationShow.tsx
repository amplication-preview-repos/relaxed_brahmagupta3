import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { RESUME_TITLE_FIELD } from "../resume/ResumeTitle";

export const EducationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fieldOfStudy" source="fieldOfStudy" />
        <TextField label="fromMonth" source="fromMonth" />
        <TextField label="fromYear" source="fromYear" />
        <TextField label="ID" source="id" />
        <TextField label="institutionName" source="institutionName" />
        <ReferenceField label="Resume" source="resume.id" reference="Resume">
          <TextField source={RESUME_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="toMonth" source="toMonth" />
        <TextField label="toYear" source="toYear" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
