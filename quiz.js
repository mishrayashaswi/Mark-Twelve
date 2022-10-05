const quizF = document.querySelector(".quiz");
const submitAnsBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output");

const correctAns = ["90", "right", "28°", "A = B = C = 60"];

function scoreCalculater() {
  let score = 0;
  let i = 0;
  const results = new FormData(quizF);
  for (let value of results.values()) {
    if (value === correctAns[i]) {
      score++;
    }
    i++;
  }
  console.log(score);
  outputBox.innerText = "your score is " + score;
}

submitAnsBtn.addEventListener("click", scoreCalculater);