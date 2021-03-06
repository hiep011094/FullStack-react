import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SocialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Title" source="title" />
        <TextInput label="Url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
