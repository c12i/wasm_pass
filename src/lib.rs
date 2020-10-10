use rand::Rng;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
/// Generates a random password
/// 
/// `len` is the length of the password
/// 
/// `no_symbols` true or false if you need special symbols in password
/// 
/// `no_nums` true or false for if you need numbers in password
/// 
/// ## Panics
/// If len is 0
pub fn generate(len: usize, no_symbols: bool, no_nums: bool) -> String {
    assert!(len > 0);

    let mut charset: &[u8] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZ\
                            abcdefghijklmnopqrstuvwxyz\
                            0123456789)(*&^%$#@!~";

    if no_symbols && no_nums {
        charset = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    } else if no_symbols {
        charset = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    } else if no_nums {
        charset = b"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz)(*&^%$#@!~";
    }

    let mut rng = rand::thread_rng();

    let password: String = (0..len)
        .map(|_| {
            let idx = rng.gen_range(0, charset.len());
            charset[idx] as char
        })
        .collect();

    password
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_generate() {
        let password = generate(20, false, false);

        println!("{}", password);

        assert_eq!(password.len(), 20);
    }

    #[test]
    #[should_panic]
    fn test_len() {
        let _ = generate(0, false, true);
    }
}
