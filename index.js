// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *Counter1 is function scoped where counter2 is using global variables, as well counterMaker is using a closure.

 * 2. Which of the two uses a closure? How can you tell?
 * Counter1(counterMaker) uses a closure, as it declares a variable, and returns a HOF which increments the variable
 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * You want to use counter1 when the data is only relevant to the function, and count2 when you need to use the variable in multiple instances
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random()*3)
}

console.log(inning())

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, inningNum){

  let inningScore = {
    Home: 0,
    Away: 0
  }

  for(let i = 0; i < inningNum; i++){
    inningScore.Home = callback();
    inningScore.Away = callback();
  }

  return inningScore
}

console.log(finalScore(inning, 3));
console.log(finalScore(inning, 6));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */
function getInningScore(cb){
  return {
    home: cb(),
    away: cb()
  }
}

function scoreboard(cb1, cb2, num) {
  let awayTeam = 0;
  let homeTeam = 0;

  for(let i = 1; i <= num; i++){
    if(i === 1){
      awayTeam += cb1(cb2).away;
      homeTeam += cb1(cb2).home;
      console.log(`${i}st inning: ${awayTeam} - ${homeTeam}`)
    } else if(i === 2){
      awayTeam += cb1(cb2).away;
      homeTeam += cb1(cb2).home;
      console.log(`${i}nd inning: ${awayTeam} - ${homeTeam}`)
    } else if(i === 3){
      awayTeam += cb1(cb2).away;
      homeTeam += cb1(cb2).home;
      console.log(`${i}rd inning: ${awayTeam} - ${homeTeam}`)
    } else {
      console.log(`${i}th inning: ${awayTeam} - ${homeTeam}`)
    }
  }
  console.log(`Final Score: ${awayTeam} - ${homeTeam}`);

}

scoreboard(getInningScore, inning, 9);


