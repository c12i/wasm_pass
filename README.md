# wasm_pass

A password generator powered by Rust, web-assembly and React.js.

This project is based on an article I wrote that demonstrates how to build this app. Read it [here](https://collinsmuriuki.xyz/wasm-tutorial/)

## Run Locally

Clone

```shell
git clone https://github.com/collinsmuriuki/wasm_pass.git
```

Build wasm package

```shell
cd wasm
wasm-pack build
```

cd to app directory and run npm install

```shell
cd app
npm install
```

Run the dev server

```shell
npm start
```

Build for production

```shell
npm run build
```

## Run tests

```sh
cargo test -- --show-output
```

## Author

**collinsmuriuki**

-   Github: [@collinsmuriuki](https://github.com/collinsmuriuki)

This project is [MIT/APACHE](LICENSE_MIT) licensed.
