const express = require("express");
const dotenv = require("dotenv");
const { OpenAI } = require("openai");
const {promptSystem} = require("../prompt/promptSystem");

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const router = express.Router();

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

router.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: promptSystem,
        },
        {
          role: "assistant",
          content: prompt,
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    res.send(response.choices[0].message.content);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
