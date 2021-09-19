import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Preview from "./components/Preview";
import Slider from "./components/Slider";
import CheckboxStack from "./components/CheckboxStack";
import Footer from "./components/Footer";
import PasswordToggler from "./components/PasswordToggler";

const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(16);
  const [hasNoSpecialCharacters, setHasNoSpecialCharacters] = useState(false);
  const [hasNoNumbers, setHasNoNumbers] = useState(false);

  const triggerWasm = useCallback(async () => {
    const { generate: generatePassword } = await import("../../wasm/pkg/wasm_pass");
    const password = generatePassword(passwordLength, hasNoSpecialCharacters, hasNoNumbers)
    setPassword(password)
  }, [hasNoNumbers, hasNoSpecialCharacters, passwordLength])

  useEffect(() => {
    triggerWasm();
  }, [hasNoNumbers, hasNoSpecialCharacters, passwordLength])

  return (
    <div className="container">
      <Header />
      <PasswordToggler handleClick={() => triggerWasm()} />
      <CheckboxStack
        nums={hasNoNumbers}
        handleNums={setHasNoNumbers}
        chars={hasNoSpecialCharacters}
        handleChars={setHasNoSpecialCharacters}
      />
      <Slider handleDrag={setPasswordLength} len={passwordLength} />
      <Preview value={password} />
      <Footer />
    </div>
  );
};

export default App;
