const questions = [
  {
    question: "What is the largest ocean in the world?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the capital of the United States?",
    options: ["Washington, D.C.", "New York City", "Los Angeles", "Chicago"],
    answer: "Washington, D.C.",
  },
  {
    question: "What is the square root of 16?",
    options: ["2", "4", "8", "16"],
    answer: "4",
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "O2", "N2"],
    answer: "H2O",
  },
  {
    question: "What is the highest mountain in the world?",
    options: ["Mount Everest", "K2", "Kanchenjunga", "Lhotse"],
    answer: "Mount Everest",
  },
  {
    question: "What is the average human body temperature?",
    options: [
      "96.8 degrees Fahrenheit",
      "98.6 degrees Fahrenheit",
      "100.4 degrees Fahrenheit",
      "102.2 degrees Fahrenheit",
    ],
    answer: "98.6 degrees Fahrenheit",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "What is the longest river in the world?",
    options: ["Nile River", "Amazon River", "Yangtze River", "Yellow River"],
    answer: "Nile River",
  },
  {
    question: "What is the name of the largest desert in the world?",
    options: [
      "Sahara Desert",
      "Gobi Desert",
      "Arabian Desert",
      "Patagonian Desert",
    ],
    answer: "Sahara Desert",
  },
  {
    question: "What is the chemical symbol for oxygen?",
    options: ["O2", "H2O", "CO2", "N2"],
    answer: "O2",
  },
];

let question = document.querySelector(".ques");
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");
let buttons = document.querySelectorAll("button");

let currentQuestion = 0;

questions.sort(() => Math.random() - 0.5);

question.innerText = questions[currentQuestion].question;
option1.innerText = questions[currentQuestion].options[0];
option2.innerText = questions[currentQuestion].options[1];
option3.innerText = questions[currentQuestion].options[2];
option4.innerText = questions[currentQuestion].options[3];

for (const button of buttons) {
  button.addEventListener("click", () => {
    console.log("clicked");

    if (button.innerText === questions[currentQuestion].answer) {
      button.style.background = "green";
    } else {
      button.style.background = "red";
    }

    currentQuestion++;

    if (currentQuestion == questions.length) {
      location.reload();
    }

    setTimeout(() => {
      button.style.background = "none";

      question.innerText = questions[currentQuestion].question;
      option1.innerText = questions[currentQuestion].options[0];
      option2.innerText = questions[currentQuestion].options[1];
      option3.innerText = questions[currentQuestion].options[2];
      option4.innerText = questions[currentQuestion].options[3];
    }, 2000);
  });
}
