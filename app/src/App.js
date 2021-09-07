import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Preview from "./components/Preview";
import Slider from "./components/Slider";
import CheckboxStack from "./components/CheckboxStack";
import Footer from "./components/Footer";
import PasswordToggler from "./components/PasswordToggler";

const App = () => {
  const [password, setPassword] = useState("");
  const [len, setLen] = useState(16);
  const [chars, setChars] = useState(false);
  const [nums, setNums] = useState(false);

  const triggerWasm = useCallback(len => {
    const wasm = import("../../wasm/pkg/wasm_pass");
    wasm.then(({generate: generatePassword}) => {
      const password = generatePassword(len)
      setPassword(password)
    })
  })

  useEffect(() => {
    triggerWasm(len);
  }, [chars, len, nums]);

  return (
    <div className="container">
      <Header />
      <PasswordToggler handleClick={() => triggerWasm(len)} />
      <CheckboxStack
        nums={nums}
        handleNums={setNums}
        chars={chars}
        handleChars={setChars}
      />
      <Slider handleDrag={setLen} len={len} />
      <Preview value={password} />
      <Footer />
    </div>
  );
};

export default App;
