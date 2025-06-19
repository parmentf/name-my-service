#!/usr/bin/env bun

import { Ollama } from 'ollama';

// Chat or generate
const chat = false;
// const model = 'qwen3:0.6b';
// const model = 'qwen3';
// const model = 'gemma3:1b';
// const model = 'gemma3:12b';
// const model = 'deepseek-r1:8b'; // Pouerk
// const model = 'phi4:latest'; // phi4:14b
// const model = 'llama3.2:3b';
const model = 'mistral:7b';

const ollama = new Ollama();

const existingServices = await Bun.file('existing-services.jsonl').text();

process.stderr.write("model:" + model + "\n");

process.stderr.write('description> ');
for await (const description of console) {
    const prompt = `You are an expert in naming services. You have to name a new service, according to the following rules:
- The name must be short, less than 15 characters
- The name must be in English
- The name must be in lower case
- The name must be in camelCase
- The name must be unique
- The name must be related to the description of the service
- The last word of the name must be a verb
- The name must not contain any special characters
- The name must not contain any numbers
- The name must not contain any spaces
- The name must not contain any accented characters
- The name must not contain any characters that are not in the English alphabet

The existing services are:
${existingServices}

Please name the new service from the following description (first translate it to English):
${description}
`;

    if (description.length) {
        const request = {
            model,
            prompt,
            format: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                    },
                    description: {
                        type: 'string',
                    },
                },
                required: ['name', 'description'],
            },
        };

        const response = await ollama.generate(request);
        console.log(JSON.stringify(JSON.parse(response.response), null, 2));
    }
    process.stderr.write('description> ');
}
