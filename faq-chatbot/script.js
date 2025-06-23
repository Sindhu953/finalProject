const faqData = {
  "what is ai": "AI stands for Artificial Intelligence. It enables machines to learn and make decisions.",
  "who are you": "I'm your friendly FAQ chatbot!",
  "how does ai work": "AI works by using algorithms and data to make decisions or predictions.",
  "what is machine learning": "Machine learning is a subset of AI that allows systems to learn from data."
};

function handleUserInput() {
  const input = document.getElementById("user-input").value.toLowerCase().trim();
  const chatLog = document.getElementById("chat-log");

  // Display user message
  chatLog.innerHTML += `<div class="user"><b>You:</b> ${input}</div>`;

  // Find best answer (keyword match)
  let answer = "Sorry, I don't understand that yet.";
  for (const question in faqData) {
    if (input.includes(question)) {
      answer = faqData[question];
      break;
    }
  }

  // Display bot response
  chatLog.innerHTML += `<div class="bot"><b>Bot:</b> ${answer}</div>`;
  document.getElementById("user-input").value = "";
  chatLog.scrollTop = chatLog.scrollHeight;
}
