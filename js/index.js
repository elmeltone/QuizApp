//VARIABLES
var $ = require('jquery');
var questions = require('./questions');
var firstQuestion = '<br><span class="question">'+questions[0].question+
	'</span><br><br><div id="idBox"><button class="start" type="button" value="null">'+
	'START'+'</button></div>';
var currentQuestion = 0;

//FUNCTIONS
function printQuestion(index) {
	var question = questions[index];
	return '<br><span classs="question">'+
		question.question+'</span><br><div class="choices"><span><button class="answer" value="0">'+
		question.options[0]+'</button></span><br><span><button class="answer" value="1">'+
		question.options[1]+'</button></span><br><span><button class="answer" value="2">'+
		question.options[2]+'</button></span><br><span><button class="answer" value="3">'+
		question.options[3]+'</button></span><br></div><br>';
	};

function nextQuestion() {
	currentQuestion = currentQuestion + 1;
	if (currentQuestion < 6)
		$('#quiz').empty().html(printQuestion(currentQuestion));
	else if (currentQuestion == 6)
		$('#quiz').empty().html('<br><span class="question"><br>'+'Thanks for playing!'+'<br>'+
			'</span><br><button class="startOver" type="button" value="null">'+
	'START OVER'+'</button><br>');
	else {
		$('#quiz').html(firstQuestion)
		currentQuestion = 0;
		};

	$('#quiz').scrollTop(0);
	};


//LOAD PAGE
$(function(){
	console.log("ready");
	$('#quiz').html(firstQuestion);

	$(document).on('click', '.start', function(){
		nextQuestion();
		});

	$(document).on('click', '.answer', function(){
		var answer = $(this).attr('value');
		if (answer == questions[currentQuestion].correct) {
			console.log('correct');
			$('#footer').append('<img class="icon" src="http://i.imgur.com/qwvd4F4.gif" alt="lamp">');
		} else {
			console.log('incorrect');
			$('#footer').append('<img class="icon" src="http://i.imgur.com/HUe53pP.gif" alt="lamp">');
		};
		nextQuestion();
		});

	$(document).on('click', '.startOver', function(){
		$('#quiz').empty().html(firstQuestion);
		currentQuestion = 0;
		$('#footer').empty().html('<p>Score:</p>');
		});


});
