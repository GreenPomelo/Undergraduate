import CryptoJS from "crypto-js";

/**
 * base on crypto-js
 * 后端用的是 AES/CBC/PKCS5Padding
 * key 和 iv 为 utf8 编码
 */
export default class Crypto {
  constructor(key, iv) {
    this.key = key;
    this.iv = iv;
  }

  static utf8Encode(x) {
    return CryptoJS.enc.Utf8.parse(x);
  }

  static random() {
    return CryptoJS.lib.WordArray.random(16).toString(CryptoJS.enc.Base64);
  }

  /**
   * 加密函数
   */
  encrypt(data) {
    return CryptoJS.AES.encrypt(data, this.key, {
      iv: this.iv
    }).ciphertext.toString(CryptoJS.enc.Base64);
  }

  jsonEncrypt(data) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), this.key, {
      iv: this.iv
    }).ciphertext.toString(CryptoJS.enc.Base64);
  }

  /**
   * 解密函数
   */
  decrypt(data) {
    return CryptoJS.AES.decrypt(data, this.key, { iv: this.iv }).toString(
      CryptoJS.enc.Utf8
    );
  }

  jsonDecrypt(data) {
    return JSON.parse(this.decrypt(data));
  }
}
