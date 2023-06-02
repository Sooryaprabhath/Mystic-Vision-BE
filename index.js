const express = require("express");
const app = express();
const cors = require("cors");

// List of random sentences
const sentences = [
  "Today, you will receive unexpected news that will change your life for the better.",
  "Your hard work and dedication will pay off in the near future, so keep pushing forward.",
  "You will encounter a difficult choice today, but trust your instincts and make the decision that feels right.",
  "Today, you will find the courage to overcome a fear that has been holding you back.",
  "A new opportunity will present itself today, and it will lead to exciting adventures and growth.",
  "Your kindness and generosity will bring you unexpected blessings today.",
  "Today, you will learn a valuable lesson from a difficult experience, and it will make you a stronger person.",
  "You will receive a message from someone you haven't heard from in a long time, and it will bring you joy and nostalgia.",
  "Today, you will find a solution to a problem that has been troubling you for a long time.",
  "Your creativity and intuition will be heightened today, leading to new insights and inspiration.",
  "Today, you will discover a hidden talent or passion that will bring you joy and fulfillment.",
  "Your positive attitude and hard work will attract new opportunities and success in your life.",
  "You will encounter a challenging situation today, but remember that you have the strength and resilience to overcome it.",
  "Your kindness and generosity will inspire others today and bring positivity to the world.",
  "Today, you will receive unexpected help or support from someone who believes in you.",
  "A long-awaited dream or goal will come to fruition today, bringing you a sense of accomplishment and satisfaction.",
  "Your creativity and resourcefulness will be put to the test today, but you will rise to the challenge and succeed.",
  "Today, you will learn an important lesson from a mistake or setback, and it will help you grow and improve.",
  "Your intuition and inner wisdom will guide you to make the right decision in a difficult situation today.",
  "Today, you will be presented with an opportunity to make a positive difference in someone else's life, and it will bring you a sense of purpose and fulfillment.",
];

app.use(cors());

// Route to get a random sentence
app.get("/random-sentence", (req, res) => {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  const randomSentence = sentences[randomIndex];
  res.json({ sentence: randomSentence });
});

// Start the server
const port = 9000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
