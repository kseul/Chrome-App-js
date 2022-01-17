const quotes = [
  {
    quote: "The only way to do great work is to love the work you do",
    author: "Steve Jobs",
  },
  {
    quote: "Our dreams can come true if we have the courage to pursue them.",
    author: "Walt Disney",
  },
  {
    quote: "Don’t go through life, grow through life.",
    author: "Eric Butterworth",
  },
  {
    quote: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
  },
  {
    quote: "If you cannot do great things, do small things in a great way.",
    author: "Napoleon Hill",
  },
  {
    quote:
      "You must expect failure as part of your journey of success, failure and success go hand in hand, you cannot have one without the other.",
    author: "Richard Parkes Cordock",
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
  },
  {
    quote:
      "When we seek to discover the best in others, we somehow bring out the best in ourselves.",
    author: "William Arthur Ward",
  },
  {
    quote:
      "You are the one that possesses the keys to your being. You carry the passport to your own happiness.",
    author: "Diane von Furstenberg",
  },
  {
    quote: "The greatest project you'll ever work on is you.",
    author: "Unknown",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
