import fs from 'fs'

const utilsProviderProfilesPath = 'src/utils/providerProfiles.ts'
let providerProfilesData = fs.readFileSync(utilsProviderProfilesPath, 'utf8')

if (!providerProfilesData.includes("case 'qwen-oauth':")) {
    providerProfilesData = providerProfilesData.replace(
        /case 'anthropic':/,
        `case 'qwen-oauth':
      return {
        provider: 'openai',
        name: 'Qwen OAuth',
        baseUrl: 'https://portal.qwen.ai/v1',
        model: 'qwen2.5-coder',
        apiKey: '',
        requiresApiKey: false, // The Qwen OAuth credential file provides the token
      }
    case 'anthropic':`
    )
}

fs.writeFileSync(utilsProviderProfilesPath, providerProfilesData)
