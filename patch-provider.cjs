const fs = require('fs');
const path = 'src/commands/provider/provider.tsx';
let content = fs.readFileSync(path, 'utf8');

const targetStr = `      label: 'OpenAI-compatible',
      value: 'openai',
      description:
        'GPT-4o, DeepSeek, OpenRouter, Groq, LM Studio, and similar APIs',
    },`;

const replacementStr = `      label: 'OpenAI-compatible',
      value: 'openai',
      description:
        'GPT-4o, DeepSeek, OpenRouter, Groq, LM Studio, and similar APIs',
    },
    {
      label: 'Qwen OAuth',
      value: 'qwen-oauth',
      description: 'Log in using the Qwen Code saved credentials (free tier)',
    },`;

content = content.replace(targetStr, replacementStr);

const stepLogicTarget = `      } else if (value === 'openai') {
        setStep({ name: 'openai-base-url' })
      }`;

const stepLogicReplacement = `      } else if (value === 'qwen-oauth') {
        onSave('qwen-oauth', {
          CLAUDE_CODE_USE_OPENAI: '1',
          OPENAI_BASE_URL: 'https://portal.qwen.ai/v1',
          OPENAI_MODEL: 'qwen2.5-coder',
          // Note: the API key is handled by the shim
        })
      } else if (value === 'openai') {
        setStep({ name: 'openai-base-url' })
      }`;

content = content.replace(stepLogicTarget, stepLogicReplacement);

fs.writeFileSync(path, content);
