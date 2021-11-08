import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MenuEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Slug" source="slug" />
        <div />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
