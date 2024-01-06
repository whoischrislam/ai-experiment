const OpenAI = require("openai");
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true

})

const messages = [
    {
        role: 'system',
        content: 'You are a helpful general knowledge expert.'
    },
    {
        role: 'user',
        content: 'Write a rap about television in 2 sentences'
    }
]

async function getResponse() {
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messages
    })
    
    console.log(response.choices[0].message.content);
}

getResponse();
