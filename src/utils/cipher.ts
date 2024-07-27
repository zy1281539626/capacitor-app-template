/**
 * 加密插件，基于crypto-js
 */
import { decrypt as aesDecrypt, encrypt as aesEncrypt } from 'crypto-js/aes'
import UTF8, { parse } from 'crypto-js/enc-utf8'
import CTR from 'crypto-js/mode-ctr'
import pkcs7 from 'crypto-js/pad-pkcs7'

// 加密器接口
export interface Encryption {
  encrypt(plainText: string): string
  decrypt(cipherText: string): string
}

// 加密参数
export interface EncryptionParams {
  key: string
  iv: string
}

// AES 加密
class AesEncryption implements Encryption {
  private readonly key
  private readonly iv

  constructor({ key, iv }: EncryptionParams) {
    this.key = parse(key)
    this.iv = parse(iv)
  }

  get getOptions() {
    return {
      mode: CTR,
      padding: pkcs7,
      iv: this.iv
    }
  }

  encrypt(plainText: string) {
    return aesEncrypt(plainText, this.key, this.getOptions).toString()
  }

  decrypt(cipherText: string) {
    return aesDecrypt(cipherText, this.key, this.getOptions).toString(UTF8)
  }
}

// 加密器工厂
export class EncryptionFactory {
  static createAesEncryption(params: EncryptionParams): Encryption {
    return new AesEncryption(params)
  }
}
