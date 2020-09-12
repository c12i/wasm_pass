import React, { useState } from "react";
const wasm = import("wasm-pass");

const App = () => {
  const [password, setPassword] = useState("");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    wasm.then((wp) => {
      setPassword(wp.generate(parseInt(input)));
    }).catch(err => {
      alert(err.toString())
    });
  };

  return (
    <div>
      <p>Enter password length:</p>
      <input type="number" onChange={handleChange} value={input} />
      <button onClick={handleClick}>Generate Password</button>
      <p>Your password:</p>
      <strong>{password}</strong>
    </div>
  );
};

export default App;
