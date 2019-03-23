
$("#score").toggle();

var time = "";
var intervalId;
var currentQ = 0;
var score = 0;
var remaining = 10;
var incorrect = "";


var list = {
    0: {
        question: "Which of these is the closest living relative to humans?",
        choice1: "A) Pigs",
        choice2: "B) Gorillas",
        choice3: "C) Chimpanzees",
        choice4: "D) Orangutans",
        correct: "C) Chimpanzees",
    
    },
    1: {

        question: "Humans belong to what genus?",
        choice1: "A) Humanum",
        choice2: "B) Hominidae",
        choice3: "C) Homo",
        choice4: "D) Manus",
        correct: "C) Homo",
    
    },
    2: {

        question: "This ancient hominin was first discovered with a specimen known as 'Taung Child'.",
        choice1: "A) Australopithecus africanus",
        choice2: "B) Homo neanderthalis",
        choice3: "C) Cro Magnon",
        choice4: "D) Homo habilis",
        correct: "A) Australopithecus africanus",
    
    },
    3: {

        question: "This Australopithicus specimen, discovered in the 1970s, was named after a contemporary song.",
        choice1: "A) Roxannne",
        choice2: "B) Jolene",
        choice3: "C) Sharona",
        choice4: "D) Lucy",
        correct: "D) Lucy",
    
    },
    4: {

        question: "This 'English ape' was regarded as legitimate for years by British paleontologists before it was exposed as a hoax.",
        choice1: "A) Cheddar Man",
        choice2: "B) Ice Man",
        choice3: "C) Piltdown Man",
        choice4: "D) Mega Man",
        correct: "C) Piltdown Man",
    
    },
    5: {

        question: "This early human species is named for its upright posture.",
        choice1: "A) Homo verticalus",
        choice2: "B) Homo erectus",
        choice3: "C) Homo bipedalis",
        choice4: "D) Homo sapiens",
        correct: "B) Homo erectus",
    
    },
    6: {

        question: "Which of these is a benefit of bipedalism?",
        choice1: "A) Conserving energy while walking",
        choice2: "B) Freeing of hands for carrying objects",
        choice3: "C) Able to stand taller and see farther",
        choice4: "D) All of the above",
        correct: "D) All of the above",
    
    },
    7: {

        question: "Homo floresiensis, a debated ancient species of human from Indonesia, was given the following nickname for its short stature:",
        choice1: "A) Hobbit",
        choice2: "B) Gnome",
        choice3: "C) Gremlin",
        choice4: "D) Lilliputian",
        correct: "A) Hobbit",
    
    },
    8: {

        question: "These ancient humans coexisted alongside our ancestors, and were named for the region in France they were found.",
        choice1: "A) Cro Magnons",
        choice2: "B) Parisians",
        choice3: "C) Neanderthals",
        choice4: "D) Morlocks",
        correct: "C) Neanderthals",
    
    },
    9: {

        question: "Humans considered virtually identical to our modern selves and not ancient ancestors are generally referred to as:",
        choice1: "A) Post-Stone Age humans",
        choice2: "B) Anatomically modern humans",
        choice3: "C) Real people",
        choice4: "D) Post-diluvians",
        correct: "B) Anatomically modern humans",
    
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
        $("#rights").html(score + " out of 10")
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
    setTimeout(nextQ, 2500)


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

