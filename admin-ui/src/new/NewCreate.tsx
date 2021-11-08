import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const NewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Image" source="image" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
