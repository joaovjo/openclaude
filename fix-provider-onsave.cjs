const fs = require('fs');
const path = 'src/commands/provider/provider.tsx';
let content = fs.readFileSync(path, 'utf8');

const targetStr = `            } else if (value === 'qwen-oauth') {
              const env = {
                CLAUDE_CODE_USE_OPENAI: '1',
                OPENAI_BASE_URL: 'https://portal.qwen.ai/v1',
                OPENAI_MODEL: 'qwen2.5-coder',
                OPENAI_API_KEY: '',
              }
              onSave('qwen-oauth', env)`;

const replacementStr = `            } else if (value === 'qwen-oauth') {
              const env = {
                CLAUDE_CODE_USE_OPENAI: '1',
                OPENAI_BASE_URL: 'https://portal.qwen.ai/v1',
                OPENAI_MODEL: 'qwen2.5-coder',
                OPENAI_API_KEY: '',
              }
              finishProfileSave(onDone, 'qwen-oauth', env)`;

content = content.replace(targetStr, replacementStr);
fs.writeFileSync(path, content);
