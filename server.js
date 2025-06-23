// backend/server.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai"); 

const app = express();

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: "Your_Api_key" // 
});

app.post("/ask", async (req, res) => {
  const question = req.body.question;
  console.log("📥 Question received:", question);

  try {
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });

    const answer = chatCompletion.choices[0].message.content;
    console.log("🤖 AI says:", answer);

    res.json({ answer });
  } catch (err) {
    console.error("❌ OpenAI Error:", err.response?.data || err.message);
    res.status(500).json({ answer: "Error processing your request." });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend running at http://localhost:5000");
});
