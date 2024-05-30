const questions = [

    {
        question: "Which is the largest planet in our solar system?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Mars", correct: false },
        ]
    },

    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false },
            { text: "Jane Austen", correct: false },
        ]
    },

    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Beijing", correct: false },
            { text: "Seoul", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Bangkok", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for water?",
        answers: [
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "CO2", correct: false },
            { text: "HO", correct: false },
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "South Korea", correct: false },
            { text: "India", correct: false },
        ]
    },


    {
        question: "Which of the following I loves the most?",
        answers: [
            { text: "Papa", correct: false },
            { text: "Mummy", correct: true },
            { text: "Sis", correct: false },
            { text: "Gf", correct: false },
        ]
    },

    {
        question: "What is my favourite color?",
        answers: [
            { text: "Pink", correct: false },
            { text: "Sky Blue", correct: false },
            { text: "Black", correct: true },
            { text: "Red", correct: false },
        ]
    },

    {
        question: "What is my favourite sport?",
        answers: [
            { text: "Badminton", correct: false },
            { text: "BGMI", correct: false },
            { text: "Cricket", correct: true },
            { text: "Football", correct: false },
        ]
    },
    {
        question: "What is my  current age ?",
        answers: [
            { text: "19+", correct: false },
            { text: "20+", correct: true },
            { text: "21+", correct: false },
            { text: "22+", correct: false },
        ]
    },
    {
        question: "Do I intersted in making a Girlfriend?",
        answers: [
            { text: "Might be", correct: false },
            { text: "Yes,100%", correct: false },
            { text: "NO,never", correct: false },
            { text: "Will see in future", correct: true },
        ]
    },

];

const questionele = document.getElementById("question");
const answerbutton = document.getElementById("answer-btns");
const nextbutton = document.getElementById("next-btn");

let currentqueIndex = 0;
let score = 0;

function startquiz() {
    currentqueIndex = 0;
    score = 0;
    nextbutton.innerHTML = "Next";
    showquestion();
}
function showquestion() {
    resetquiz();
    let currques = questions[currentqueIndex];
    let queNo = currentqueIndex +1;
    questionele.innerHTML = queNo + ". " + currques.question;

    currques.answers.forEach(ans => {
        const button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", selectanswer);

    });

}

function resetquiz() {
    nextbutton.style.display = "none";
    while (answerbutton.firstChild) {
        answerbutton.removeChild(answerbutton.firstChild);
    }
}

function selectanswer(e) {
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";
    if (iscorrect) {
        selectedbtn.classList.add("correct");
        score++;
    }
        else {
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button=>{
        if(button.dataset.correct==="true")
            {
                button.classList.add("correct");
            }
            button.disabled=true;
    })
    nextbutton.style.display="block";
}


function showscore()
{
   
    resetquiz();
    questionele.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="Play Again";
    nextbutton.style.display="block";
    
}

function nextquestion()
{
    currentqueIndex++;
    if(currentqueIndex<questions.length)
        {
            showquestion();
        }
        else {
            showscore();
        }
}

nextbutton.addEventListener("click",()=>{
    if(currentqueIndex < questions.length)
        {
            nextquestion();
        }
        else {
            resetquiz();
            startquiz();
        }
});

startquiz();

