import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const HotLineCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Phone" source="phone" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
