import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ResumeTitle } from "../resume/ResumeTitle";

export const EducationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fieldOfStudy" source="fieldOfStudy" />
        <TextInput label="fromMonth" source="fromMonth" />
        <TextInput label="fromYear" source="fromYear" />
        <TextInput label="institutionName" source="institutionName" />
        <ReferenceInput source="resume.id" reference="Resume" label="Resume">
          <SelectInput optionText={ResumeTitle} />
        </ReferenceInput>
        <TextInput label="toMonth" source="toMonth" />
        <TextInput label="toYear" source="toYear" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
