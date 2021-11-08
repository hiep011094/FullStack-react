import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
