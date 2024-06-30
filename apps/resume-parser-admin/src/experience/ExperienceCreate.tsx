import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ResumeTitle } from "../resume/ResumeTitle";

export const ExperienceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="companyName" source="companyName" />
        <BooleanInput label="currentJob" source="currentJob" />
        <TextInput label="fromMonth" source="fromMonth" />
        <TextInput label="fromYear" source="fromYear" />
        <TextInput
          label="jobResponsibilities"
          multiline
          source="jobResponsibilities"
        />
        <TextInput label="jobTitle" source="jobTitle" />
        <ReferenceInput source="resume.id" reference="Resume" label="Resume">
          <SelectInput optionText={ResumeTitle} />
        </ReferenceInput>
        <TextInput label="toMonth" source="toMonth" />
        <TextInput label="toYear" source="toYear" />
      </SimpleForm>
    </Create>
  );
};
