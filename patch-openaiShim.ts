import fs from 'fs'

const p = 'src/services/api/openaiShim.ts'
let content = fs.readFileSync(p, 'utf8')

// The dynamic import or top-level import is better. Let's fix the nested import syntax.
content = content.replace(
    "  import { readQwenCredentials } from '../../utils/qwenOAuth.js'",
    ""
)

const topLevelImport = "import { readQwenCredentials } from 'src/utils/qwenOAuth.js'\n"
if (!content.includes(topLevelImport)) {
    content = topLevelImport + content;
}

fs.writeFileSync(p, content)
