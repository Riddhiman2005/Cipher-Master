
// Encryption function
function encrypt(plainText, key) {
    let encryptedText = '';
    for (let i = 0; i < plainText.length; i++) {
        let char = plainText[i];
        if (char.match(/[a-z]/i)) {
            let code = plainText.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + key) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + key) % 26) + 97);
            }
        }
        encryptedText += char;
    }
    return encryptedText;
}

// Decryption function
function decrypt(cipherText, key) {
    let decryptedText = '';
    for (let i = 0; i < cipherText.length; i++) {
        let char = cipherText[i];
        if (char.match(/[a-z]/i)) {
            let code = cipherText.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 - key + 26) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 - key + 26) % 26) + 97);
            }
        }
        decryptedText += char;
    }
    return decryptedText;
}

// Get elements from the DOM
const plaintextInput = document.getElementById('plaintext');
const encryptionKeyInput = document.getElementById('encryptionKey');
const encryptBtn = document.getElementById('encryptBtn');
const encryptedTextOutput = document.getElementById('encryptedText');

const ciphertextInput = document.getElementById('ciphertext');
const decryptionKeyInput = document.getElementById('decryptionKey');
const decryptBtn = document.getElementById('decryptBtn');
const decryptedTextOutput = document.getElementById('decryptedText');

// Encrypt button event listener
encryptBtn.addEventListener('click', () => {
    const plaintext = plaintextInput.value;
    const key = parseInt(encryptionKeyInput.value);

    if (!plaintext || isNaN(key)) {
        return;
    }

    const encryptedText = encrypt(plaintext, key);
    encryptedTextOutput.value = encryptedText;
});

// Decrypt button event listener
decryptBtn.addEventListener('click', () => {
    const ciphertext = ciphertextInput.value;
    const key = parseInt(decryptionKeyInput.value);

    if (!ciphertext || isNaN(key)) {
        return;
    }

    const decryptedText = decrypt(ciphertext, key);
    decryptedTextOutput.value = decryptedText;
});
