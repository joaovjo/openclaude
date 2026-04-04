const fs = require('fs');
const path = 'src/cli/handlers/auth.ts';
let content = fs.readFileSync(path, 'utf8');

const targetStr = `export async function authLogin({
  email,
  sso,
  console: useConsole,
  claudeai,`;

const replacementStr = `import { readQwenCredentials } from '../../utils/qwenOAuth.js'

export async function authLogin({
  email,
  sso,
  console: useConsole,
  claudeai,`;

if (!content.includes('readQwenCredentials')) {
    content = content.replace(targetStr, replacementStr);
    fs.writeFileSync(path, content);
}
