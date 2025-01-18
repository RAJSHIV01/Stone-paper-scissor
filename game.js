let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScroePara = document.querySelector("#user");
const compScroePara = document.querySelector("#comp_score");

const genCompChoice=()=>{
    const option=["stone","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}
const showWinner=(userWin , userChoice , compChoice)=>{
    if(userWin){
        userScore++;
        userScroePara.innerText=userScore;
        msg.innerText=`You win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScroePara.innerText=compScore;
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const drawGame=()=>{
   msg.innerText="Game is draw";
   msg.style.backgroundColor= "rgb(5, 5, 43)";
}
const playGame = (userChoice)=>{
    console.log("user Choice=" ,userChoice);
    const compChoice=genCompChoice();
    console.log("comp Choice=" ,compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="stone"){
            userWin=compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false: true;
        }
        else{
            userWin=compChoice==="stone"? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});