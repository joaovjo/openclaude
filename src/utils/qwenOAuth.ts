import fs from 'fs'
import path from 'path'
import os from 'os'

export const QWEN_DIR = '.qwen'
export const QWEN_CREDENTIAL_FILENAME = 'oauth_creds.json'

export interface QwenCredentials {
  access_token: string
  refresh_token?: string
  token_type?: string
  resource_url?: string
  expiry_date?: number
}

export function getQwenCachedCredentialPath(): string {
  return path.join(os.homedir(), QWEN_DIR, QWEN_CREDENTIAL_FILENAME)
}

export function readQwenCredentials(): QwenCredentials | null {
  try {
    const filePath = getQwenCachedCredentialPath()
    if (!fs.existsSync(filePath)) {
      return null
    }
    const data = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(data) as QwenCredentials
  } catch (err) {
    return null
  }
}

export function writeQwenCredentials(creds: QwenCredentials): boolean {
  try {
    const filePath = getQwenCachedCredentialPath()
    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    fs.writeFileSync(filePath, JSON.stringify(creds, null, 2), 'utf8')
    return true
  } catch (err) {
    return false
  }
}
