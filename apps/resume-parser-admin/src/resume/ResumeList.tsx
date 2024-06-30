import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ResumeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Resumes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
