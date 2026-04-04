import fs from 'fs'

const utilsProviderProfilesPath = 'src/utils/providerProfiles.ts'
let providerProfilesData = fs.readFileSync(utilsProviderProfilesPath, 'utf8')

// Add qwen-oauth option to provider list
if (!providerProfilesData.includes("'qwen-oauth'")) {
    providerProfilesData = providerProfilesData.replace(
        /export type ProviderPreset =/,
        "export type ProviderPreset =\n  | 'qwen-oauth'"
    )
}

fs.writeFileSync(utilsProviderProfilesPath, providerProfilesData)
