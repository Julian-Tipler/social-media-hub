import { Box, Flex, Image, Input } from "@chakra-ui/react";
import { useState } from "react";

export const ImageUploader = () => {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const onUpload = (e: any) => {
    const file = e.target.files[0];
    setUploadedImage(file);
    setPreviewURL(URL.createObjectURL(file));
  };
  return uploadedImage && previewURL ? (
    <Image
      objectFit={"cover"}
      alt="Preview"
      src={previewURL}
      maxWidth="100%"
      flex={1}
    />
  ) : (
    <>
      <Box></Box>
      <Input
        flex={1}
        onChange={onUpload}
        type="file"
        width="100%"
        // position="absolute"
        top="0"
        left="0"
        opacity="0"
        aria-hidden="true"
        accept="image/*"
      />
    </>
  );
};
