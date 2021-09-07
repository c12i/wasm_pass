use rand::Rng;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
/// # Password Generator
///
/// A random password generator function
///
/// # Arguments
/// `len` is the length of the password (`usize`). `has_no_special_characters` specifies presence or absence of special_characters. `has_no_numbers` specifies the presence ot absence of numbers.
///
/// # Example
/// ```rust
/// use wasm_pass::generate;
///
/// let password = generate(20, false, false);
/// assert_eq!(password.len(), 20);
/// ```
///
/// # Panics
/// If `len == 0`
pub fn generate(len: usize, has_no_special_characters: bool, has_no_numbers: bool) -> String {
    assert!(len > 0);

    let mut charset: &[u8] = b"ABCDEFGHIJKLMNOPQRSTUVWXYZ\
                            abcdefghijklmnopqrstuvwxyz\
                            0123456789)(*&^%$#@!~";

    if has_no_special_characters && has_no_numbers {
        charset = b"ABCDEFGHIJKLMNOPQRSTUVWXYZ\
                    abcdefghijklmnopqrstuvwxyz";
    } else if has_no_special_characters {
        charset = b"ABCDEFGHIJKLMNOPQRSTUVWXYZ\
                    abcdefghijklmnopqrstuvwxyz\
                    0123456789";
    } else if has_no_numbers {
        charset = b"ABCDEFGHIJKLMNOPQRSTUVWXYZ\
                    abcdefghijklmnopqrstuvwxyz\
                    )(*&^%$#@!~";
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
