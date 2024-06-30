import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EducationTitle } from "../education/EducationTitle";
import { ExperienceTitle } from "../experience/ExperienceTitle";
import { LanguageTitle } from "../language/LanguageTitle";

export const ResumeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="educationList" source="educationList" />
        <ReferenceArrayInput
          source="educations"
          reference="Education"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EducationTitle} />
        </ReferenceArrayInput>
        <TextInput label="emailAddress" source="emailAddress" type="email" />
        <TextInput label="experienceList" source="experienceList" />
        <ReferenceArrayInput
          source="experiences"
          reference="Experience"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExperienceTitle} />
        </ReferenceArrayInput>
        <TextInput label="firstName" source="firstName" />
        <ReferenceArrayInput
          source="languages"
          reference="Language"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LanguageTitle} />
        </ReferenceArrayInput>
        <TextInput label="lastName" source="lastName" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="resumeHash" source="resumeHash" />
      </SimpleForm>
    </Create>
  );
};
