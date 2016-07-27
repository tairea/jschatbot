var questionNum = 0;							// keep count of question, used for IF condition.
var question = '<h1>what is your name?</h1>';		     // first question

var output = document.getElementById('output');		     // store id="output" in output variable
output.innerHTML = question;                            // ouput first question

function test() {
    alert("This is just a test. Thou shalt not call this function.");
}

function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h1>hello ' + input + '</h1>';  // output response
    document.getElementById("input").value = "";   	    // clear text box
    question = '<h1>how old are you?</h1>';			    // load next question		
    setTimeout(timedQuestion, 2000);					// output next question after 2sec delay
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h1>That means you were born in ' + (2016 - input) + '</h1>';
    document.getElementById("input").value = "";   
    question = '<h1>where are you from?</h1>';		      	
    setTimeout(timedQuestion, 2000);
    }

    //add more questions with else if statement. steps below for new questions.
    //1. output response to previous question.
    //2. clear input textbox
    //3. load next question
    //4. time the next question function.
    //rince and repeat

}

function timedQuestion() {
    output.innerHTML = question;				// outputs the next question. ready to take a new response.
    document.getElementById("output").addClass("active");
    setTimeout(function () {
        document.getElementById("output").removeClass("active");
    }, 1000);
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();										// run bot() function when enter key pressed
    questionNum++;								// increase questionNum count by 1
  }
});
