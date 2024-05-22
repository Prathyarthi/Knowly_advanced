

import { config } from "dotenv";

config();
import { Client } from "@octoai/client";



const client = new Client(process.env.OCTOAI_KEY);

app.post('/summarize', async (req, res) => {
    const { text } = req.body
    console.log(text);

    const completion = await client.chat.completions.create({
        "model": "mixtral-8x7b-instruct-fp16",
        "messages": [
            {
                "role": "system",
                "content": `Summarize the following text: ${text}`
            },
            {
                "role": "user",
                "content": "PDF content:\n" + text
            }
        ]
    });

    console.log(completion.choices[0].message.content);

    return res.json({
        success: true,
        message: "Summarize successful",
        summary: completion.choices[0].message.content
    })
})
