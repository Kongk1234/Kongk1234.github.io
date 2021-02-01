let form = document.createElement("div");
form.setAttribute("class", "form");

let label = document.createElement("label");
label.setAttribute("for", "guessField");
form.appendChild(label);

let text = document.createElement("input");
text.setAttribute("type", "text");
text.setAttribute("id", "guessField");
text.setAttribute("class", "guessField");
text.placeholder = "Your Guess";
form.appendChild(text);

let input = document.createElement("input");
input.setAttribute("type", "submit");
input.setAttribute("value", "Submit guess");
input.setAttribute("id", "submitGuess");
input.setAttribute("class", "guessSubmit");
form.appendChild(input);

let button = document.createElement("button");
button.innerHTML = "New Number";
button.setAttribute("id", "newNumber");
form.appendChild(button);

let field = document.getElementById("field");
document.body.insertBefore(form,field);
let number = Math.floor(Math.random() * 10 + 1);

let guess = 1;
document.getElementById("newNumber").onclick = function(){
    number = Math.floor(Math.random() * 10 + 1);
    console.log(number);
}

document.getElementById("submitGuess").onclick = function(){
    let numberguessed = document.getElementById("guessField").value;

    if(numberguessed == number)
    {
        alert("YEEEEEEEEEEEEEEEEEESSSSSSSSSSSSSSSSSSSSSIIIIIIIIIIIIIIRRRRRRRR YOU GEUESSED IT IN" + guess + "ATTEMPS");
    }
    else if(numberguessed > number)
    {
        guess++;
        alert("TRY A SMALLER NUMBER");
    }
    else
    {
        guess++;
        alert("TRY A BIGGER NUMBER");
    }
}