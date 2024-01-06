//create a random generator
//player1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
//change the image source
let randomNumberSource1 = "Images/dice" + randomNumber1 + ".png";
//select the img tag
let sourceAttribute1 = document.querySelectorAll("img")[0];
//insert the new sorce using the setAttribute
sourceAttribute1.setAttribute("src", randomNumberSource1)

//create a random generator
//player2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
//change the image source
let randomNumberSource2 = "Images/dice" + randomNumber2 + ".png";
//select the img tag
let sourceAttribute2 = document.querySelectorAll("img")[1];
//insert the new sorce using the setAttribute
sourceAttribute2.setAttribute("src", randomNumberSource2);

//checeking the winner by creating a function with conditionals
function winner (){
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player1 wins😂"
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player2 wins😜"
    } else {
        document.querySelector("h1").innerHTML = "It's a draw😒";
    }
}

//calling out the function
winner()