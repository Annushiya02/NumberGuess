const submitButton=document.getElementById("button");
const life=document.getElementById("lives");
const msg=document.getElementById("message");
let randomNumber=Math.floor(Math.random()*100)+1;
let lives =5;

submitButton.onclick = () => {
    let userInput= document.getElementById("num").value;
    userInput=Number(userInput);
    if(userInput===randomNumber){
        window.location.href="./win.html";
    }
    else{
        lives--;
        life.textContent=lives;
        if(lives===0){
            window.location.href="./lose.html";
        }
        else if(userInput>randomNumber){
            msg.textContent="Oops! Your guess is greater than my guess";
        }
        else{
            msg.textContent="Oops! Your guess is smaller than my guess";
        }
    }

}