import React from "react";
import { Text } from "@chakra-ui/core";

const Header = () => {
  return (
    <>
      <Text fontSize="6xl">wasm_pass</Text>
      <Text color="gray.500">
        A password generator built with{" "}
        <a href="https://www.rust-lang.org/what/wasm">RustWasm</a> and{" "}
        <a href="https://reactjs.org/">React</a>
      </Text>
    </>
  );
};

export default Header;
