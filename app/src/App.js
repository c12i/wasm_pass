import React, { useState, useEffect } from "react";
import {
  Text,
  IconButton,
  Stack,
  Checkbox,
  useClipboard,
} from "@chakra-ui/core";
import Preview from "./components/Preview";
import Slider from "./components/Slider";
const wasm = import("wasm-pass");

const App = () => {
  const [password, setPassword] = useState("");
  const [len, setLen] = useState(16);
  const [chars, setChars] = useState(false);
  const [nums, setNums] = useState(false);
  const { onCopy, hasCopied } = useClipboard(password);

  useEffect(() => {
    wasm
      .then((wp) => {
        setPassword(wp.generate(parseInt(len), chars, nums));
      })
      .catch((err) => {
        alert(err.toString());
      });
  }, []);

  const handleClick = () => {
    wasm
      .then((wp) => {
        setPassword(wp.generate(parseInt(len), chars, nums));
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  const handleNums = () => {
    setNums(!nums);
    handleClick();
  }

  const handleChars = () => {
    setChars(!chars);
    handleClick();
  }

  const handleDrag = (val) => {
    setLen(val);
    wasm
      .then((wp) => {
        setPassword(wp.generate(parseInt(val), chars, nums));
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <div className="container">
      <Text fontSize="6xl">wasm_pass</Text>
      <Text color="gray.500">
        A password generator built with{" "}
        <a href="https://www.rust-lang.org/what/wasm">RustWasm</a> and{" "}
        <a href="https://reactjs.org/">React</a>
      </Text>
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
      <Stack
        spacing={10}
        isInline
        pb={4}
        fontFamily="sans-serif"
        color="gray.500"
      >
        <Checkbox
          size="sm"
          variantColor="teal"
          defaultIsChecked={!nums}
          onChange={handleNums}
        >
          0-9
        </Checkbox>
        <Checkbox
          size="sm"
          variantColor="teal"
          defaultIsChecked={!chars}
          onChange={handleChars}
        >
          !@#$%^&*
        </Checkbox>
      </Stack>
      <Slider handleDrag={handleDrag} len={len} />
      <Preview onCopy={onCopy} value={password} hasCopied={hasCopied} />
      <Text color="gray.500" fontSize="sm">
        Fork me on{" "}
        <a href="https://github.com/collinsmuriuki/wasm_pass">GitHub</a>
      </Text>
    </div>
  );
};

export default App;
