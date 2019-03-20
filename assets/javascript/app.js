var time = 30
var intervalId;
var currentQ = 1;

var list = {
    q1: {
        question: "Who's buried in Grant's tomb",
        choice1: "Tomby McTombface",
        choice2: "Lee",
        choice3: "Grant",
        choice4: "It actually symbolizes all Grants"
    
    },
    q2: {

        question: "Who's buried in Grant's tomb",
        choice1: "Tomby McTombface",
        choice2: "Lee",
        choice3: "Grant",
        choice4: "It actually symbolizes all Grants"
    
    }
    
}

//$("#question").html(q1.question) example

function start(){
    clearInterval(intervalId)
    intervalId = setInterval(timerOn, 1000)

    $("#question").html(list.q1.question)
    $("#answer_1").html(list.q1.choice1)
    $("#answer_2").html(list.q1.choice2)
    $("#answer_3").html(list.q1.choice3)
    $("#answer_4").html(list.q1.choice4)
    
}

function timerOn() {
time--
$("#timer").html(time)
}

$("#start-btn").on("click", start)