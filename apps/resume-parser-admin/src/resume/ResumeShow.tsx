import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { RESUME_TITLE_FIELD } from "./ResumeTitle";

export const ResumeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="educationList" source="educationList" />
        <TextField label="emailAddress" source="emailAddress" />
        <TextField label="experienceList" source="experienceList" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="resumeHash" source="resumeHash" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Education"
          target="resumeId"
          label="Educations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="fieldOfStudy" source="fieldOfStudy" />
            <TextField label="fromMonth" source="fromMonth" />
            <TextField label="fromYear" source="fromYear" />
            <TextField label="ID" source="id" />
            <TextField label="institutionName" source="institutionName" />
            <ReferenceField
              label="Resume"
              source="resume.id"
              reference="Resume"
            >
              <TextField source={RESUME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="toMonth" source="toMonth" />
            <TextField label="toYear" source="toYear" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Experience"
          target="resumeId"
          label="Experiences"
        >
          <Datagrid rowClick="show">
            <TextField label="companyName" source="companyName" />
            <DateField source="createdAt" label="Created At" />
            <BooleanField label="currentJob" source="currentJob" />
            <TextField label="fromMonth" source="fromMonth" />
            <TextField label="fromYear" source="fromYear" />
            <TextField label="ID" source="id" />
            <TextField
              label="jobResponsibilities"
              source="jobResponsibilities"
            />
            <TextField label="jobTitle" source="jobTitle" />
            <ReferenceField
              label="Resume"
              source="resume.id"
              reference="Resume"
            >
              <TextField source={RESUME_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="toMonth" source="toMonth" />
            <TextField label="toYear" source="toYear" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Language"
          target="resumeId"
          label="Languages"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="language" source="language" />
            <ReferenceField
              label="Resume"
              source="resume.id"
              reference="Resume"
            >
              <TextField source={RESUME_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
