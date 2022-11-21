// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

  // My predicion is that it will print 'Miss Scarlet'. I can't really see
  // anything wrong.
  // Ah yes, it printed 'The murderer is Miss Scarlet which I 
  // should have seen.

//   const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//I think it will print 'The murderer is 'Professor Plum'
// because it is trying to redefine a 'const' function
// and since that isn't poissible the murderer will not change.
// So it threw an error which, again, I should have seen. Since
// murderer cannot be redeifined it just gives an error instead.

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// 'First Verdict: Mrs. Peacock'
// 'Second Verdict: Professor Plum'
// I believe that because the orginal variable was defined using
// 'let' that it can be changed and so when the first verdict
// calls 'declare murderer' that it will have changed.
// The second verdict should call the original murderer because
// 'let' is not a global function
// Ok I was correct apart from the 'The murderer is ' part

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard' I think is the only thing it will print
// Colonel Mustard is replaced as the original variable was a 'let'
// 'suspectThree' will not print, however, as it just exists in the declareAllSuspects function
// and cannot be called upon unless a var was used for the original function.
// Ok, I didn't see/forgot that 'suspectThree' was defined at the beginning so it did indeed print.

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

  //I think this one will be an error because it's trying to redefine a const object.
//I was wrong, it printed the revolver, I guess the act of redifining a part of the object is ok,
// just not the whole thing

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//The murderer is Mrs. White will be the output. The murderer starts as Mustard then
// the changeMurder function is called witch changes it to Mr Green but then there is a funception
//and the plot twist changes it to Mrs White
// Yay!

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
     let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// I think it will print 'The murderer is Colonel Mustard' but maybe the 'let murderer' in 
// plot twist will throw an error.
//The answer is Mr Green. I've looked at it for a while now and I don't think I understand why...

// const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);
  
//I think it will print 'The weapon is Candle Stick'. So the room gets changed to dining room
//and that then satisfies the condition for the plot twist to change to Mustard which in turn
// satisfies the condition for unexpected outcome to change weapon to candle stick.
//Yay!

// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//    let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

//I think it will print 'The murderer is Mrs Peacock'. The if function is true so the let statement
//should then be able to redefine murderer as Mrs Peacock.
//So it was wrong. I tested by deleting the let in the if function and that seems to be what is 
//stopping it from changing.





