use wasm_bindgen::prelude::*;
use rand::Rng;

#[wasm_bindgen]
pub fn generate(len: usize) -> String {
    const CHARSET: &[u8] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ\
                            abcdefghijklmnopqrstuvwxyz\
                            0123456789)(*&^%$#@!~".as_bytes();
    let mut rng = rand::thread_rng();

    let password: String = (0..len)
        .map(|_| {
            let idx = rng.gen_range(0, CHARSET.len());
            CHARSET[idx] as char
        })
        .collect();

    println!("{:?}", password);

    password
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_generate() {
        let password = generate(20);

        println!("{}", password);

        assert_eq!(password.len(), 20);
    }
}