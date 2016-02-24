$(document).ready(function(){
	console.log("ready");

	/*question1:
			<p class="question">
			1. Which of these things are not commonly thrown on the ice by hockey fans in at least one city with an NHL team?
			</p>
			<ul class="answers">
				<li><input type="checkbox" id="cbox1" value="checkbox1">  A)   Rats</li>
				<li><input type="checkbox" id="cbox2" value="checkbox2">  B)   Octopi</li>
				<li><input type="checkbox" id="cbox3" value="checkbox3">  C)   Pucks</li>
				<li><input type="checkbox" id="cbox4" value="checkbox4">  D)   Hats</li>
				<li><button class="next" type="button">NEXT ---></button></li>
			</ul>*/
	/*goals:
				<li class="genos"><img class="icon" src="images/lamp.gif" alt="lamp"></li>
				<li class="genos"><img class="icon" src="images/no-goal.gif" alt="lamp"></li>
				<li class="genos"><img class="icon" src="images/lamp.gif" alt="lamp"></li>
				<li class="genos"><img class="icon" src="images/lamp.gif" alt="lamp"></li>
				<li class="genos"><img class="icon" src="images/lamp.gif" alt="lamp"></li>
				<li class="genos"><img class="icon" src="images/no-goal.gif" alt="lamp"></li>*/
	
	var questions = [
		{"question":"READY?"},
		{"question":"1. Which of these things are not commonly thrown on the ice by hockey fans in at least one city with an NHL team?", "choiceA":"  A)   Rats", "choiceB":"  B)   Octopi", "choiceC":"  C)   Pucks", "choiceD":"  D)   Hats"},
		{"question":"2. As of March 2016, only 3 teams have won the title during the last 5 Stanley Cup Championshps. Which of the following teams is not one of them?", "choiceA":"  A)   Los Angeles Kings", "choiceB":"  B)   Boston Bruins", "choiceC":"  C)   Pittsburgh Penguins", "choiceD":"  D)   Chicago Blackhawks"},
		{"question":'3. Which hockey player is referred to as "The Great One"?', "choiceA":"  A)   Wayne Gretzky", "choiceB":"  B)   Mark Messier", "choiceC":"  C)   Sidney Crosby", "choiceD":"  D)   Patrick Kane"},
		{"question":"4. Where is the Hockey Hall of Fame?", "choiceA":"  A)   New York City", "choiceB":"  B)   Toronto", "choiceC":"  C)   Montreal", "choiceD":"  D)   Ottawa"},
		{"question":"5. What is the penalty for fighting during a game in the NHL?", "choiceA":"  A)   None", "choiceB":"  B)   2 min in the penalty box", "choiceC":"  C)   At least 5 min in the penalty box", "choiceD":"  D)   Thrown out of game"}
	];


});