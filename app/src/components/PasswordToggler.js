import React from "react";
import { Text, IconButton } from "@chakra-ui/core";

const PasswordToggler = ({ handleClick }) => {
  return (
    <Text pb={2} color="gray.500">
      Configure:{" "}
      <IconButton
        icon="repeat"
        cursor="pointer"
        variantColor="teal"
        border="none"
        isRound
        ml={2}
        onClick={handleClick}
      />
    </Text>
  );
};

export default PasswordToggler;
