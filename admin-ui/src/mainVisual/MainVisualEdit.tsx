import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MainVisualEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Title" source="title" />
        <TextInput label="Video" source="video" />
      </SimpleForm>
    </Edit>
  );
};
