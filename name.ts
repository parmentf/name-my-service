#!/usr/bin/env bun

import { Ollama } from 'ollama';

const chat = false;
const ollama = new Ollama();

const existingServices = await Bun.file('existing-services.jsonl').text();

process.stdout.write('description> ');
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

Please name the new service from the following description (translate it in English if necessary):
${description}
`;

    if (description.length) {
        if (chat) {
            const request = {
                model: 'qwen3:0.6b',
                messages: [
                    {
                        role: 'user',
                        content: prompt,
                    },
                ],
            };

            const response = await ollama.chat(request);
            console.log(response.message.content);
        } else {
            const request = {
                model: 'qwen3:0.6b',
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
            console.log(response.response);
        }
    }
    process.stdout.write('description> ');
}
