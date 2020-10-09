import React from "react";
import {
    Button,
    Flex,
    Input,
  } from "@chakra-ui/core";

const Preview = ({ value, onCopy, hasCopied }) => {
  return (
    <>
      <Flex mt={2}>
        <Input value={value} isReadOnly width="300px" height="36px" />
        <Button variantColor="teal" onClick={onCopy} ml={2} border="none">
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </Flex>
    </>
  );
};

export default Preview;
