/**
 * 持久化缓存插件，基于@capacitor/preferences
 */
import { Preferences } from '@capacitor/preferences'
import { EncryptionFactory } from './cipher'

const defaultEncryption = EncryptionFactory.createAesEncryption({
  key: '_00011101111000!',
  iv: '!00011110111000_'
})

export class DataCache {
  private moduleName: string
  private encrypt: boolean
  private encryption: any

  constructor(moduleName: string, encrypt?: boolean, encryption?: any) {
    this.moduleName = moduleName
    this.encrypt = encrypt || false
    this.encryption = this.encryption || defaultEncryption
  }

  private getKey(key: string) {
    return `${this.moduleName}_${key}`.toUpperCase()
  }

  async setData(key: string, value: Record<string, any>) {
    const stringValue = JSON.stringify(value)
    const resolvedValue = this.encrypt ? this.encryption.encrypt(stringValue) : stringValue
    await Preferences.set({ key: this.getKey(key), value: resolvedValue })
  }

  async getData(key: string) {
    const preferenceValue = await Preferences.get({ key: this.getKey(key) })
    if (!preferenceValue?.value) return null
    const value = this.encrypt
      ? this.encryption.decrypt(preferenceValue.value)
      : preferenceValue.value
    return JSON.parse(value)
  }

  async removeData(key: string) {
    await Preferences.remove({ key: this.getKey(key) })
  }
}
