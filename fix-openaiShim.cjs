const fs = require('fs');
const path = 'src/services/api/openaiShim.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace("import { readQwenCredentials } from 'src/utils/qwenOAuth.js'", "import { readQwenCredentials } from '../../utils/qwenOAuth.js'");

fs.writeFileSync(path, content);
