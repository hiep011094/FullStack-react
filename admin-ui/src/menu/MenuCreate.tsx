import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MenuCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Slug" source="slug" />
        <div />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
