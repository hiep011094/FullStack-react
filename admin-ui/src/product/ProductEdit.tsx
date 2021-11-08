import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Cate Slug" source="cateSlug" />
        <div />
        <TextInput label="Description" multiline source="description" />
        <div />
        <NumberInput label="Price New" source="priceNew" />
        <NumberInput label="Price Old" source="priceOld" />
        <div />
        <TextInput label="Slug" source="slug" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
