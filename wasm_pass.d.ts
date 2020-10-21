/* tslint:disable */
/* eslint-disable */
/**
* # Password Generator
* 
* A random password generator function
* 
* # Arguments
* `len` is the length of the password (`usize`). `no_symbols` specifies presence or absence of symbols. `no_nums` specifies the presence ot absence of numbers.
* 
* # Example
* ```rust
* use wasm_pass::generate;
* 
* let password = generate(20, false, false);
* assert_eq!(password.len(), 20);
* ```
* 
* # Panics
* If `len == 0`
* @param {number} len
* @param {boolean} no_symbols
* @param {boolean} no_nums
* @returns {string}
*/
export function generate(len: number, no_symbols: boolean, no_nums: boolean): string;
