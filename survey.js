// Focus on the following:
// The example usage shown at the beginning
// The .question(query, callback) function
// The .close() function

// EXAMPLE:
// Devani loves listening to Ludovico Einaudi while coding,
// devouring Yak Momos for brunch, prefers Tennis over any other sport,
// and is amazing at dropping mad puns at inopportune times.

/* BOILER PLATE:

==================================================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});

==================================================================
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name/nickname?  ', (name) => {
  rl.question('What\'s your face?  ', (face) => {

  
  console.log(`Thank you for your valuable feedback: ${name} ${face}`);

  rl.close();
  })
});