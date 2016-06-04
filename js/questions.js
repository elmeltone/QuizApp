var $ = require('jquery');

//QUIZ QUESTIONS
  var questions = [
    {"question":"READY?"},
    {"question":"1. Which of these things are not commonly thrown on the ice by hockey fans in at least one city with an NHL team?",
      "options":["Hats", "Octopi", "Children", "Rats"],
      "correct":"2"},
    {"question":"2. Only 3 teams  won the Stanley Cup from 2010-2015. Which of the following teams is not one of them?",
      "options":["Los Angeles Kings", "Boston Bruins", "Chicago Blackhawks", "Pittsburgh Penguins"],
      "correct":"3"},
    {"question":'3. Which hockey player is referred to as "The Great One"?',
      "options":["Wayne Gretzky", "Mark Messier", "Sidney Crosby", "Patrick Kane"],
      "correct":"0"},
    {"question":"4. Where is the Hockey Hall of Fame?",
      "options":["New York City", "Toronto", "Montreal", "Ottawa"],
      "correct":"1"},
    {"question":"5. What is the penalty for fighting during a game in the NHL?",
      "options":["None", "2 min in the penalty box", "At least 5 min in the box", "Thrown out of game"],
      "correct":"2"}
  ];

  module.exports = questions;
