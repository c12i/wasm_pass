import React, { useState } from "react";
const wasm = import("wasm-pass");

const App = () => {
  const [password, genPassword] = useState("");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    wasm.then((wp) => {
      genPassword(wp.generate(parseInt(input)));
    }).catch(err => {
        alert(err.toString())
    });
  };

  return (
    <div>
      <p>Enter password length:</p>
      <input type="number" onChange={handleChange} value={input} minLength={5} maxLength={1000000} />
      <button onClick={handleClick}>Generate Password</button>
      <p>Your password:</p>
      <strong>{password}</strong>
    </div>
  );
};

export default App;
