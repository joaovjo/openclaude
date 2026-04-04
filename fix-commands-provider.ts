import fs from 'fs'

const p = 'src/commands/provider/provider.tsx'
let content = fs.readFileSync(p, 'utf8')

// The earlier regex substitution for the dropdown list missed it, let's fix
if (!content.includes("{ label: 'Qwen OAuth', value: 'qwen-oauth'")) {
    content = content.replace(
        /value: 'anthropic',?\s*\},/,
        "value: 'anthropic' },\n        { label: 'Qwen OAuth', value: 'qwen-oauth', description: 'Log in with Qwen Code' },"
    )
    content = content.replace(
        /value: 'openai',?\s*\},/,
        "value: 'openai' },\n        { label: 'Qwen OAuth', value: 'qwen-oauth', description: 'Log in with Qwen Code' },"
    )
}

fs.writeFileSync(p, content)
