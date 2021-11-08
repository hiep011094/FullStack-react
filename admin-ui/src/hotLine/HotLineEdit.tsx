import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const HotLineEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Phone" source="phone" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
