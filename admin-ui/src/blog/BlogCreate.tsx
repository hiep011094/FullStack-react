import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BlogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <TextInput label="Content" source="content" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="Image" source="image" />
        <TextInput label="Slug" source="slug" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
