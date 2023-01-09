let answer = Math.floor(Math.random()*100) + 1;

let hintMinus = Math.floor(Math.random()*30) + 1;
console.log(answer);

let answerHint;
 answerHint = answer - hintMinus;

let guesses = 0;

document.getElementById("submitButton").onclick = function ()
{
   let guess = document.getElementById("guessField").value;
    
   guesses += 1;
   if (guess == answer){
    alert(`CORRECT!!! YOU ARE A FUCKING GENIUS HAHAHAAHAHAHAHA!!! It took you ${guesses} guesses`);
    alert ("Lets play again!");
    location.reload();
    } else if (guess > answer) {
         alert("try guessing lower!!");
    } else if (guess < answer){
        alert("try guessing higher!!");
    }
   }

   document.getElementById("hintButton").onclick = function () {
    alert(`The number is the sqaure of ${Math.sqrt(answerHint)} + ${hintMinus}`);
   }

   



