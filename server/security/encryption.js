const crypto = require("crypto");
const dotenv = require("dotenv").config();


const algorithm = process.env.ALGORITHM;
const initVector = crypto
    .createHash('sha512')
    .update(process.env.SECRET_IV)
    .digest('hex')
    .substring(0, 16);
const message = "This is a secret message";
const Securitykey = crypto
    .createHash('sha512')
    .update(process.env.SECRET_KEY)
    .digest('hex')
    .substring(0, 32);

const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

let encryptedData = cipher.update(message, "utf-8", "hex");

encryptedData += cipher.final("hex");

console.log("Encrypted message: " + encryptedData);

const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

decryptedData += decipher.final("utf8");

console.log("Decrypted message: " + decryptedData);