wasm_pass
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](README.md)
[![License: MIT/APACHE](https://img.shields.io/badge/License-MIT/APACHE-yellow.svg)](LICENSE_MIT)

> A password generator build with Rust and Web Assembly

## Install

```sh
npm install wasm-pass
```

## Usage

```js
const wasm_pass = import("wasm-pass");

wasm_pass.then(wasm_pass => {
    const password = wasm_pass.generate(10);
}).catch(err => console.error(err))
```

## Run tests

```sh
cargo test
```

## Author

👤 **collinsmuriuki**

* Github: [@collinsmuriuki](https://github.com/collinsmuriuki)

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2020 [collinsmuriuki](https://github.com/collinsmuriuki).

This project is [MIT/APACHE](LICENSE_MIT) licensed.