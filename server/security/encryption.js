const crypto = require("crypto");
const dotenv = require("dotenv").config();


const algorithm = process.env.ALGORITHM;
const initVector = crypto
    .createHash('sha512')
    .update(process.env.SECRET_IV)
    .digest('hex')
    .substring(0, 16);

const securitykey = crypto
    .createHash('sha512')
    .update(process.env.SECRET_KEY)
    .digest('hex')
    .substring(0, 32);





const encryptData = (data)=> {
    const cipher = crypto.createCipheriv(algorithm, securitykey, initVector)
    return Buffer.from(
        cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
    ).toString('base64')
}

const decryptData = (encryptedData)=> {
    const buff = Buffer.from(encryptedData, 'base64')
    const decipher = crypto.createDecipheriv(algorithm, securitykey, initVector)
    return (
        decipher.update(buff.toString('utf8'), 'hex', 'utf8') +
        decipher.final('utf8')
    )
}

module.exports = {encryptData,decryptData};

//onst cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
//
//et encryptedData = cipher.update(message, "utf-8", "hex");
//
//ncryptedData += cipher.final("hex");
//
//onsole.log("Encrypted message: " + encryptedData);
//
//onst decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
//
//et decryptedData = decipher.update(encryptedData, "hex", "utf-8");
//
//ecryptedData += decipher.final("utf8");
//
//onsole.log("Decrypted message: " + decryptedData);