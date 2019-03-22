
$("#score").toggle();

var time = "";
var intervalId;
var currentQ = 0;
var score = 0;
var remaining = 10;
var incorrect = "";


var list = {
    0: {
        question: "Who's buried in Grant's tomb",
        choice1: "A) Tomby McTombface",
        choice2: "B) Lee",
        choice3: "C) Grant",
        choice4: "D) It actually symbolizes all Grants",
        correct: "C) Grant",
    
    },
    1: {

        question: "Who's buried in Lee's tomb",
        choice1: "A) Bomby McBombface",
        choice2: "B) Grant",
        choice3: "C) Lee",
        choice4: "D) It actually symbolizes all Lees",
        correct: "C) Lee",
    
    },
    2: {

        question: "Who's buried in Bomby's tomb",
        choice1: "A) Bomby McBombface",
        choice2: "B) Grant",
        choice3: "C) Lee",
        choice4: "D) It actually symbolizes all Lees",
        correct: "A) Bomby McBombface",
    
    },
    3: {

        question: "Who's buried in Bee's tomb",
        choice1: "A) Gomby McLombface",
        choice2: "B) Brant",
        choice3: "C) Gee",
        choice4: "D) It actually symbolizes all Bees",
        correct: "D) It actually symbolizes all Bees",
    
    },
    4: {

        question: "Who's buried in Zee's tomb",
        choice1: "A) Gomby McGombface",
        choice2: "B) Zrant",
        choice3: "C) Zee",
        choice4: "D) It actually symbolizes all Zees",
        correct: "C) Zee",
    
    },
    5: {

        question: "Who's buried in Frampt's tomb",
        choice1: "A) Fromby McFrombface",
        choice2: "B) Frampt",
        choice3: "C) Free",
        choice4: "D) It actually symbolizes all Frampts",
        correct: "B) Frampt",
    
    },
    6: {

        question: "Who's buried in Pant's tomb",
        choice1: "A) Pomby McPombface",
        choice2: "B) Pant",
        choice3: "C) Pee",
        choice4: "D) It actually symbolizes all Pants",
        correct: "B) Pant",
    
    },
    7: {

        question: "Who's buried in Jee's tomb",
        choice1: "A) Jomby McJombface",
        choice2: "B) Jrant",
        choice3: "C) Jee",
        choice4: "D) It actually symbolizes all Jees",
        correct: "A) Jomby McJombface",
    
    },
    8: {

        question: "Who's buried in Yee's tomb",
        choice1: "A) Yomby McYombface",
        choice2: "B) Yrant",
        choice3: "C) Yee",
        choice4: "D) It actually symbolizes all Yees",
        correct: "C) Yee",
    
    },
    9: {

        question: "Who's buried in Vrant's tomb",
        choice1: "A) Vomby McVombface",
        choice2: "B) Vrant",
        choice3: "C) Vee",
        choice4: "D) It actually symbolizes all Vrants",
        correct: "B) Vrant",
    
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

function nextQ() {
    $("#choices").toggle()
    $("#question").toggle()
    final();

}

function final(){
    if (remaining <= 0) {
        $("#result").text("Finished!")
        timerOff()
        incorrect = (10 - score)
        $("#choices").toggle()
        $("#timer").toggle()
        $("#rights").html(score)
        $("#wrongs").html(incorrect)
        $("#score").toggle()
        $("#question").toggle()

    }   

    else {
        $("#result").empty()
        $("#correct_answer").empty()
        start()
    }
}

function correctAnswer() {
    console.log("right answer")
    $("#result").text("Correct!")
    currentQ++
    $("#choices").toggle()
    $("#question").toggle()
    score++
    remaining--
    setTimeout(nextQ, 3000)


}

function wrongAnswer(){
    console.log("wrong answer")
    $("#result").text("BZZT!")
    $("#correct_answer").text("Correct answer was: " + list[currentQ].correct)
    currentQ++
    $("#choices").toggle()
    $("#question").toggle()
    remaining--
    setTimeout(nextQ, 3000)

}

$("#start-btn").on("click", function(){
    start()
    $("#start-btn").toggle()
})


$("#answer_1").on("click", function(){
    clearInterval(intervalId)

    if ((list[currentQ].choice1) == list[currentQ].correct) {
        correctAnswer()
        
    }

    else {
        wrongAnswer()

        }
})

$("#answer_2").on("click", function(){
    clearInterval(intervalId)

    if ((list[currentQ].choice2) == list[currentQ].correct) {
        correctAnswer()
    }

    else {
        wrongAnswer()
    }
})

$("#answer_3").on("click", function(){
    clearInterval(intervalId)

    if ((list[currentQ].choice3) == list[currentQ].correct) {
        correctAnswer()
    }

    else {
        wrongAnswer()
    }
})

$("#answer_4").on("click", function(){
    clearInterval(intervalId)

    if ((list[currentQ].choice4) == list[currentQ].correct) {
        correctAnswer()
    }

    else {
        wrongAnswer()
    }
})

