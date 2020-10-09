use rand::Rng;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn generate(len: usize, no_chars: bool, no_nums: bool) -> String {
    let mut charset: &[u8] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ\
                            abcdefghijklmnopqrstuvwxyz\
                            0123456789)(*&^%$#@!~"
        .as_bytes();

    if no_chars && no_nums {
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".as_bytes();
    } else if no_chars {
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".as_bytes();
    } else if no_nums {
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz)(*&^%$#@!~".as_bytes();
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
}
