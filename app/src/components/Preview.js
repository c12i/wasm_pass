import React from "react";
import { Box, Button, Flex, Input, useClipboard } from "@chakra-ui/core";

const Preview = ({ value }) => {
  const { onCopy, hasCopied } = useClipboard(value);
  return (
    <Box width={["100%", "50%", "40%", "35%"]}>
      <Flex py={4}>
        <Input value={value} width="full" isReadOnly height="36px" />
        <Button variantColor="teal" onClick={onCopy} ml={2} border="none">
          {hasCopied ? "Copied" : "Copy"}
        </Button>
      </Flex>
    </Box>
  );
};

export default Preview;
