#!/usr/bin/env bun

import { zodResponseFormat } from 'openai/helpers/zod.mjs';
import OpenAI from 'openai';
import { z } from 'zod';

// Chat or generate
const chat = false;
const model = 'mistral-small-3.2-24b'; // Mistral 3.2 24b / ILAAS

// const ollama = new Ollama();
const client = new OpenAI({
    apiKey: Bun.env.ILAAS_API_KEY,
    baseURL: Bun.env.ILAAS_API_URL,
});

const responseSchema = z.object({
    name: z.string(),
    description: z.string(),
});

const existingServices = await Bun.file('existing-services.jsonl').text();

process.stderr.write('model:' + model + '\n');

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
        const response = await client.chat.completions.create({
            model,
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.1,
            stream: false,
            response_format: zodResponseFormat(responseSchema, 'json'),
        });
        console.log(response.choices[0].message.content);
    }
    process.stderr.write('description> ');
}
