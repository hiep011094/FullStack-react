import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SocialCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Create>
  );
};
