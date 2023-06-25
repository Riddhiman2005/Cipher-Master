
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

// Calculate key function
function calculateKey(plainText, cipherText) {
    let key = 0;
    for (let i = 0; i < plainText.length; i++) {
        let plainCharCode = plainText.charCodeAt(i);
        let cipherCharCode = cipherText.charCodeAt(i);

        if (plainCharCode >= 65 && plainCharCode <= 90) {
            let diff = (cipherCharCode - plainCharCode + 26) % 26;
            key = diff > key ? diff : key;
        } else if (plainCharCode >= 97 && plainCharCode <= 122) {
            let diff = (cipherCharCode - plainCharCode + 26) % 26;
            key = diff > key ? diff : key;
        }
    }
    return key;
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

const plainTextKeyInput = document.getElementById('plainTextKey');
const cipherTextKeyInput = document.getElementById('cipherTextKey');
const calculateKeyBtn = document.getElementById('calculateKeyBtn');
const keyValueOutput = document.getElementById('keyValue');

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

// Calculate key button event listener
calculateKeyBtn.addEventListener('click', () => {
    const plainText = plainTextKeyInput.value;
    const cipherText = cipherTextKeyInput.value;

    if (!plainText || !cipherText) {
        return;
    }

    const key = calculateKey(plainText, cipherText);
    keyValueOutput.value = key;
});
