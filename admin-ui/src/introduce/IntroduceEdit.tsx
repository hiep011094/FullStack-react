import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const IntroduceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <div />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
