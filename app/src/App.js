import React, { useState, useEffect } from "react";
import {
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  IconButton,
  useClipboard,
} from "@chakra-ui/core";
import Preview from "./components/Preview";
const wasm = import("wasm-pass");

const App = () => {
  const [password, setPassword] = useState("");
  const [len, setLen] = useState(16);
  const { onCopy, hasCopied } = useClipboard(password);

  useEffect(() => {
    wasm
      .then((wp) => {
        setPassword(wp.generate(parseInt(len)));
      })
      .catch((err) => {
        alert(err.toString());
      });
  }, []);

  const handleClick = () => {
    wasm
      .then((wp) => {
        setPassword(wp.generate(parseInt(len)));
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  const handleDrag = (val) => {
    setLen(val);
    wasm
      .then((wp) => {
        setPassword(wp.generate(parseInt(val)));
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <div className="container">
      <Text fontSize="6xl">wasm-pass</Text>
      <Text color="gray.500">
        A password generator built with{" "}
        <a href="https://www.rust-lang.org/what/wasm">RustWasm</a> and{" "}
        <a href="https://reactjs.org/">React</a>
      </Text>
      <Text mt={4} color="gray.500">
        Password Length:{" "}
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
      <Slider
        min={15}
        max={100}
        defaultValue={20}
        width="400px"
        color="teal"
        onChange={handleDrag}
      >
        <SliderTrack />
        <SliderFilledTrack />
        <SliderThumb size={6}>
          <Text color="gray.500" fontSize="xs">
            {len}
          </Text>
        </SliderThumb>
      </Slider>
      <Preview onCopy={onCopy} value={password} hasCopied={hasCopied} />
      <Text color="gray.500" fontSize="sm">
        Fork me on{" "}
        <a href="https://github.com/collinsmuriuki/wasm_pass">GitHub</a>
      </Text>
    </div>
  );
};

export default App;
