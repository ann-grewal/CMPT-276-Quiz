
// display changing questions by buttons
function toquestion1() {
    document.getElementById("question2").style.display = "none"; 
    document.getElementById("question1").style.display = "block"; 
}
function toquestion2() {
    document.getElementById("question1").style.display = "none"; 
    document.getElementById("question3").style.display = "none"; 
    document.getElementById("question2").style.display = "block"; 
}
function toquestion3() {
    document.getElementById("question2").style.display = "none"; 
    document.getElementById("question4").style.display = "none"; 
    document.getElementById("question3").style.display = "block"; 
}
function toquestion4() {
    document.getElementById("question3").style.display = "none"; 
    document.getElementById("question4").style.display = "block"; 
}
  
// display final score and answers 
function tosubmit() {
    document.getElementById("question4").style.display = "none"; 
    document.getElementsByTagName("h1")[0].innerHTML = "Interactive Quiz Answers!"; 
    document.getElementById("outcome").style.display = "block";
    var selected_inputs = []; 
    var all_inputs = document.getElementsByTagName("input"); 
    for (let i = 0; i < all_inputs.length; i++) {
        if (all_inputs[i].checked) {
            selected_inputs.push(all_inputs[i])
        }
    }
    var outcomes = document.getElementsByTagName("p");
    var scores = 0; 
    for (let i = 0; i < outcomes.length; i++) {
        if (selected_inputs[i].value != "Correct") {
            outcomes[i].innerHTML += "You incorrectly answered " + selected_inputs[i].value + "."; 
            scores++; 
        }
    }
}