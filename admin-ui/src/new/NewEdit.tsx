import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const NewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Image" source="image" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
