const quizDB=[
    {
        question: "Q1: What is the full form of HTML",
        a: "HyperText and links Markup Language",
        b: "Hey Text Markup Language",
        c: "HighText Machine Language",
        d: "Hypertext Markup Language",
        ans:"ans4"
    },
    {
        question: "Q2:  CSS stands for -",
        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "None of the above",
        ans:"ans3"
    },
    {
        question: "Q3:Which type of JavaScript language is ___",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Assembly-language",
        d: "High-level",
        ans:"ans2"
    },
    {
        question: "Q4: The correct sequence of HTML tags for starting a webpage is -",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body",
        ans:"ans4"
    }
  ];

  const question=document.querySelector('.question');
  const option1= document.querySelector('#option1');
  const option2= document.querySelector('#option2');
  const option3= document.querySelector('#option3');
  const option4= document.querySelector('#option4');
  const submit= document.querySelector('#submit');
  const answers =document.querySelectorAll('.answer');
  const showScore=document.querySelector('#showScore');
 
    let questionCount=0;
      let score=0;

    const loadQuestion = () => {
      
    const questionList=quizDB[questionCount];
     question.innerText=questionList.question;
    option1.innerHTML=questionList.a; 
    option2.innerHTML=questionList.b;
    option3.innerHTML=questionList.c;
    option4.innerHTML=questionList.d; 
    }
  
  
  
  loadQuestion();
  const getCheckAnswer = () =>{
    let answer;

    answers.forEach((currAnsElem) =>{
    if(currAnsElem.checked){
        answer =currAnsElem.id;
    }
    
    });
    return answer;
  };
  const deselectall = () => {
      answers.forEach((currAnsElem) =>currAnsElem.checked=false);
  }
  submit.addEventListener('click',()=>{
      const checkedAnswer = getCheckAnswer();
      console.log(checkedAnswer);
      if(checkedAnswer ===   quizDB[questionCount].ans){
          score++;
      };

      questionCount++;

      deselectall();
      if(questionCount < quizDB.length){
          loadQuestion();
      }else{
        showScore.innerHTML=`
        <h3> Your Scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">play Again</button>
        `;
    showScore.classList.remove('scoreArea')
}
  });