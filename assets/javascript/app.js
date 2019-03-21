
$("#score").toggle();

var time = "";
var intervalId;
var currentQ = 0;
var score = 0;
var remaining = 10;
var incorrect = (10 - score);


var list = {
    0: {
        question: "Who's buried in Grant's tomb",
        choice1: "Tomby McTombface",
        choice2: "Lee",
        choice3: "Grant",
        choice4: "It actually symbolizes all Grants",
        correct: "Grant",
    
    },
    1: {

        question: "Who's buried in Lee's tomb",
        choice1: "Bomby McBombface",
        choice2: "Grant",
        choice3: "Lee",
        choice4: "It actually symbolizes all Lees",
        correct: "Lee",
    
    },
    2: {

        question: "Who's buried in Bomby's tomb",
        choice1: "Bomby McBombface",
        choice2: "Grant",
        choice3: "Lee",
        choice4: "It actually symbolizes all Lees",
        correct: "Bomby McBombface",
    
    },
    3: {

        question: "Who's buried in Bee's tomb",
        choice1: "Gomby McLombface",
        choice2: "Brant",
        choice3: "Gee",
        choice4: "It actually symbolizes all Bees",
        correct: "It actually symbolizes all Bees",
    
    },
    4: {

        question: "Who's buried in Zee's tomb",
        choice1: "Gomby McGombface",
        choice2: "Zrant",
        choice3: "Zee",
        choice4: "It actually symbolizes all Zees",
        correct: "Zee",
    
    },
    5: {

        question: "Who's buried in Frampt's tomb",
        choice1: "Fromby McFrombface",
        choice2: "Frampt",
        choice3: "Freee",
        choice4: "It actually symbolizes all Frampts",
        correct: "Frampt",
    
    },
    6: {

        question: "Who's buried in Pant's tomb",
        choice1: "Pomby McPombface",
        choice2: "Pant",
        choice3: "Pee",
        choice4: "It actually symbolizes all Pants",
        correct: "Pant",
    
    },
    7: {

        question: "Who's buried in Jee's tomb",
        choice1: "Jomby McJombface",
        choice2: "Jrant",
        choice3: "Jee",
        choice4: "It actually symbolizes all Jees",
        correct: "Jomby McJombface",
    
    },
    8: {

        question: "Who's buried in Yee's tomb",
        choice1: "Yomby McYombface",
        choice2: "Yrant",
        choice3: "Yee",
        choice4: "It actually symbolizes all Yees",
        correct: "Yee",
    
    },
    9: {

        question: "Who's buried in Vrant's tomb",
        choice1: "Vomby McVombface",
        choice2: "Vrant",
        choice3: "Vee",
        choice4: "It actually symbolizes all Vrants",
        correct: "Vrant",
    
    },
}

//$("#question").html(q1.question) example

function start(){
    time = 30
    $("#timer").html(time)

    clearInterval(intervalId)
    intervalId = setInterval(timerOn, 1000)

    $("#question").html(list[currentQ].question)
    $("#answer_1").html(list[currentQ].choice1)
    $("#answer_2").html(list[currentQ].choice2)
    $("#answer_3").html(list[currentQ].choice3)
    $("#answer_4").html(list[currentQ].choice4)

}

function timerOn() {
    time--
    $("#timer").html(time)

    if (time <= 0) {
        clearInterval(intervalId)
        wrongAnswer()        
    }
}

function timerOff(){
    clearInterval(intervalId)
}

function final(){
    if (remaining <= 0) {
        $("#result").text("Finished!")
        timerOff()
        $("#choices").toggle()
        $("#timer").toggle()
        $("#rights").html(score)
        $("#wrongs").html(incorrect)
        $("#score").toggle()
        $("#question").toggle()

    }   

    else {
        start()
    }
}

function correctAnswer() {
    console.log("right answer")
    $("#result").text("Correct!")
    score++
    currentQ++
    remaining--
    
    final();

}

function wrongAnswer(){
    console.log("wrong answer")
    $("#result").text("BZZT!")
    currentQ++
    remaining--
    
    final();
}

$("#start-btn").on("click", function(){
    start()
    $("#start-btn").toggle()
})


$("#answer_1").on("click", function(){

    if ((list[currentQ].choice1) == list[currentQ].correct) {
        correctAnswer()
        
    }

    else {
        wrongAnswer()

        }
})

$("#answer_2").on("click", function(){

    if ((list[currentQ].choice2) == list[currentQ].correct) {
        correctAnswer()
    }

    else {
        wrongAnswer()
    }
})

$("#answer_3").on("click", function(){
    
    if ((list[currentQ].choice3) == list[currentQ].correct) {
        correctAnswer()
    }

    else {
        wrongAnswer()
    }
})

$("#answer_4").on("click", function(){

    if ((list[currentQ].choice4) == list[currentQ].correct) {
        correctAnswer()
    }

    else {
        wrongAnswer()
    }
})

