import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Preview from "./components/Preview";
import Slider from "./components/Slider";
import CheckboxStack from "./components/CheckboxStack";
import Footer from "./components/Footer";
import PasswordToggler from "./components/PasswordToggler";
const wasm = import("wasm-pass");

const App = () => {
  const [password, setPassword] = useState("");
  const [len, setLen] = useState(16);
  const [chars, setChars] = useState(false);
  const [nums, setNums] = useState(false);

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
  };

  const handleChars = () => {
    setChars(!chars);
    handleClick();
  };

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
      <Header />
      <PasswordToggler handleClick={handleClick} />
      <CheckboxStack
        nums={nums}
        handleNums={handleNums}
        chars={chars}
        handleChars={handleChars}
      />
      <Slider handleDrag={handleDrag} len={len} />
      <Preview value={password} />
      <Footer />
    </div>
  );
};

export default App;
