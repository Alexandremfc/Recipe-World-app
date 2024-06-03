import { Button, FormLabel, Input } from "@chakra-ui/react";
import { Dispatch, useState } from "react";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import apiCleint from "../services/api-cleint";

interface Props {
  setSelectedImage: Dispatch<React.SetStateAction<string>>;
}
const UploadImage = ({ setSelectedImage }: Props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    const file = data.images[0];

    if (!file) {
      console.error("No file selected.");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    setSelectedImage(file.name);

    apiCleint
      .post("/recipes/upload", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
      })}
    >
      <FormLabel htmlFor="image">Upload an image</FormLabel>
      <Input {...register("images")} id="image" type="file" />
      <Button type="submit" colorScheme="teal">
        Upload
      </Button>
    </form>
  );
};

export default UploadImage;
