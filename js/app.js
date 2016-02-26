$(document).ready(function(){
	console.log("ready");
	
//QUIZ QUESTIONS
	var questions = [
		{"question":"READY?"},
		{"question":"1. Which of these things are not commonly thrown on the ice by hockey fans in at least one city with an NHL team?",
			"options":["Rats", "Octopi", "Pucks", "Hats"],
			"correct":"2"},
		{"question":"2. As of March 2016, only 3 teams have won the title during the last 5 Stanley Cup Championshps. Which of the following teams is not one of them?",
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
	var firstQuestion = '<span class="question">'+questions[0].question+'</span><br>';
	var currentQuestion = 1;
	var nextQuestion = '<span classs="question">'+questions[currentQuestion].question+'</span><br><div class="choices"><input type="checkbox" value="0"><span>'+questions[currentQuestion].options[0]+'</span><br><input type="checkbox" value="0"><span>'+questions[currentQuestion].options[1]+'</span><br><input type="checkbox" value="0"><span>'+questions[currentQuestion].options[2]+'</span><br><input type="checkbox" value="0"><span>'+questions[currentQuestion].options[3]+'</span><br></div>';
	
//START PAGE
	$('#quiz').html(firstQuestion);
	
//EVENTS
	currentQuestion = questions[1];
	$('.next').on('click',(function newQuestion(event) {
		$('#quiz').empty().html(nextQuestion);
		
	}));

});