$(document).ready(function(){
	console.log("ready");
	
//QUIZ QUESTIONS
	var questions = [
		{"question":"READY?"},
		{"question":"1. Which of these things are not commonly thrown on the ice by hockey fans in at least one city with an NHL team?",
			"options":["Rats", "Octopi", "Pucks", "Hats"],
			"correct":"2"},
		{"question":"2. As of March 2016, only 3 teams have won the title over the last 5 Stanley Cup Championshps. Which of the following teams is not one of them?",
			"options":["Los Angeles Kings", "Boston Bruins", "Chicago Blackhawks", "Pittsburgh Penguins"],
			"correct":"3"},
		{"question":'3. Which hockey player is referred to as "The Great One"?',
			"options":["Wayne Gretzky", "Mark Messier", "Sidney Crosby", "Patrick Kane"],
			"correct":"0"},
		{"question":"4. Where is the Hockey Hall of Fame?",
			"options":["New York City", "Toronto", "Montreal", "Ottawa"],
			"correct":"1"},
		{"question":"5. What is the penalty for fighting during a game in the NHL?",
			"options":["None", "2 min in the penalty box", "At least 5 min in the penalty box", "Thrown out of game"],
			"correct":"2"}
	];

//VARIABLES
	var firstQuestion = '<span class="question">'+questions[0].question+
		'</span><br><div id="idBox"><button class="next" type="button" value="null">'+
		'NEXT --->'+'</button></div>';
		
	var currentQuestion = 0;
	
	//var scoreboard = document.getElementById('#footer');
	
	function printQuestion(index) {
		var question = questions[index];
		return '<span classs="question">'+
			question.question+'</span><br><div class="choices"><span><button class="answer" value="0">'+
			question.options[0]+'</button></span><br><span><button class="answer" value="1">'+
			question.options[1]+'</button></span><br><span><button class="answer" value="2">'+
			question.options[2]+'</button></span><br><span><button class="answer" value="3">'+
			question.options[3]+'</button></span><br></div>';
		};
	
	function nextQuestion() {
		currentQuestion = currentQuestion + 1;
		if (currentQuestion < 6)
			$('#quiz').empty().html(printQuestion(currentQuestion));
		else if (currentQuestion == 6)
			$('#quiz').empty().html('<span class="question">'+'Thanks for playing!'+'<br>'+
				'Click below to start over'+'</span><br><button class="startOver" type="button" value="null">'+
		'START OVER --->'+'</button>');
		else {
			$('#quiz').html(firstQuestion)
			currentQuestion = 0;
			};
		};
	
	function getAnswer() {	
		console.log('function working');
		var answer = $(this).attr('value');
		if (answer == questions[currentQuestion].correct) {
			console.log('correct');
			$('#footer').append('<img class="icon" src="images/lamp.gif" alt="lamp">');
		} else {
			console.log('incorrect');
			$('#footer').append('<img class="icon" src="images/no-goal.gif" alt="lamp">');
		};
		nextQuestion();
		};
	
//START PAGE
	$('#quiz').html(firstQuestion);
	
//EVENTS
	$(document).on('click', '.next', function(){
		nextQuestion();
		});
		
	$(document).on('click', '.answer', function(){
		getAnswer();
		});
		
	$(document).on('click', '.startOver', function(){
		$('#quiz').empty().html(firstQuestion);
		currentQuestion = 0;
		$('#footer').empty().html('<p>Score:   </p>');
		});


});