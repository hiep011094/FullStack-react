import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const IntroduceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <div />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
