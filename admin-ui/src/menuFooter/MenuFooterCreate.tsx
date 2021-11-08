import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MenuFooterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Slug" source="slug" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
