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
	var firstQuestion = '<span class="question">'+questions[0].question+'</span><br><div id="idBox"><button class="next" type="button">'+'NEXT --->'+'</button></div>';
	var currentQuestion = 0;
	function nextQuestion(index) {
		var question = questions[index];
		return '<span classs="question">'+question.question+'</span><br><div class="choices"><span><button class="answer" value="0">'+question.options[0]+'</button></span><br><span><button class="answer" value="1">'+question.options[1]+'</button></span><br><span><button class="answer" value="2">'+question.options[2]+'</button></span><br><span><button class="answer" value="3">'+question.options[3]+'</button></span><br></div>';
	};
	
//START PAGE
	$('#quiz').html(firstQuestion);
	
//EVENTS
	$('.next').on('click',(function newQuestion(event) {
		currentQuestion = currentQuestion + 1;
		if (currentQuestion < 6)
			$('#quiz').empty().html(nextQuestion(currentQuestion));
		else if (currentQuestion == 6)
			$('#quiz').empty().html('<span classs="question">'+'Thanks for playing!'+'<br>'+'Click "next" to start over'+'</span><br>');
		else $('#quiz').html(firstQuestion);
		
	// ***NEED TO RESET currentQuestion VARIABLE TO '0' ON QUIZ RESTART***
		
		/*var answer = $('input[type="checkbox"]:checked').val();
		if (answer == questions[currentQuestion].correct) {
			console.log('correct');
		}*/
		
		}));

});