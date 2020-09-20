import React, { useState } from "react";
const wasm = import("wasm-pass");

const App = () => {
  const [password, setPassword] = useState("");
  const [input, setInput] = useState("16");

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
    <div className="container">
      <h2>
        <a href="https://github.com/collinsmuriuki/wasm_pass">wasm-pass</a>
      </h2>
      <p>Enter password length:</p>
      <input type="number" onChange={handleChange} value={input} />
      <button onClick={handleClick}>Generate Password</button>
      <p>Your password:</p>
      <strong>{password}</strong>
    </div>
  );
};

export default App;
