# wasm_pass
[![wasm-pass](https://img.shields.io/npm/v/wasm-pass.svg)](https://www.npmjs.com/package/wasm-pass)
[![Build Status](https://travis-ci.com/collinsmuriuki/wasm_pass.svg?branch=master)](https://travis-ci.com/collinsmuriuki/wasm_pass)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](README.md)
[![License: MIT/APACHE](https://img.shields.io/badge/License-MIT/APACHE-yellow.svg)](LICENSE_MIT)

> A password generator build with Rust and Web Assembly.

## Install
```sh
npm install wasm-pass
```
KNOWN ISSUE: npm package seems to not be consistent

## Usage

```js
const wasm_pass = import("wasm-pass");

wasm_pass.then(wasm_pass => {
    /*
    @param len number
    @param no_symbols boolean
    @param no_nums boolean
    */
    const password = wasm_pass.generate(10, false, false);
    console.log(password);
}).catch(err => console.error(err))
```

## Run tests

```sh
cargo test -- --show-output
```

## Author

**collinsmuriuki**

* Github: [@collinsmuriuki](https://github.com/collinsmuriuki)

## Tutorial

Wrote an article about how I built this project [here](https://developers.decoded.africa/how-to-build-a-npm-package-with-rust-and-web-assembly-and-implement-it-on-a-react-application/)


This project is [MIT/APACHE](LICENSE_MIT) licensed.