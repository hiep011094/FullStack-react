import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MainVisualCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Title" source="title" />
        <TextInput label="Video" source="video" />
      </SimpleForm>
    </Create>
  );
};
