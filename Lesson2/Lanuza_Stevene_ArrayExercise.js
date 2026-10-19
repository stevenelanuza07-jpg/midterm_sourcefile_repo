'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// Store the original names and final scores.
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

// Store three activity scores for each original student.
const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

// Preserve the original names for the activity matrix.
const originalNames = Array.from(studentNames);

console.log('\nPART A: ORIGINAL RECORDS');

// Use a for loop to display every name and score.
for(let i = 0; i < studentNames.length; i++){
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`)
}

console.log('\nPART B: ADD NEW STUDENTS');

//  Add Faith and 88 at the end.
studentNames.push('Faith');
studentScores.push(88);
//  Add Aaron and 76 at the beginning.
studentNames.unshift('Aaron');
studentScores.unshift(77);
//  Display both arrays and their length.
for(let i = 0; i < studentNames.length; i++){
  console.log(`${i} - ${studentNames[i]}: ${studentScores[i]}`)
}

console.log('\nPART C: REMOVE AND REPLACE RECORDS');

//  Remove the first name and score.
const removeFirst = studentNames.shift()
const removeFirstScore = studentScores.shift()
//  Remove the last name and score.
const removeLast = studentNames.pop()
const removeLastScore = studentScores.pop()
//  Find Daniel's index.
//  Remove Daniel and Daniel's score.
const removeDaniel = studentNames.splice(3, 1)
const removeDanielScore = studentScores.splice(3, 1)
//  Insert Grace and 82 at index 2.
studentNames.splice(2, 0, "Grace")
studentScores.splice(2, 0, 82)
//  Display the updated arrays.
console.log(studentNames)
console.log(studentScores)
console.log('\nPART D: CLASS STATISTICS');

//  Calculate the total score.
//  Calculate the average score.
//  Find the highest score.
//  Find the lowest score.
//  Display all statistics.
let total = 0;
let average = 0;
let highest = studentScores[0];
let lowest = studentScores[0];

for(let i = 0; i < studentScores.length; i++){
  const scores = studentScores[i];
  total += scores;
  if(scores > highest){
    highest = scores;
  }
  if(scores < lowest){
    lowest = scores
    
  }
}
console.log("Total Score: "+ total)
    console.log("Average: "+ total / studentScores.length);
    console.log("Highest: "+ highest);
    console.log("Lowest: "+ lowest);
console.log('\nPART E: PASSING-SCORE ANALYSIS');

//  Use filter to obtain passing scores.
//  Use map to produce Passed or Failed statuses.
//  Use some to check whether at least one student failed.
//  Use every to check whether all students passed.
//  Display all results.

const isPassed = studentScores.filter(score => score >= 75);
console.log('Passed Scores: '+ isPassed)

const statuses = studentScores.map(score => { return score >= 75 ? "Passed" : "Failed"
})
console.log('Statuses: '+ statuses)

const isFailed = studentScores.some (score => score < 75);
console.log('Is there at least one student who fail? ' + isFailed)

const isAllPassed = studentScores.every(score => score < 75);
console.log('Is all student passed? ' + isAllPassed)

console.log('\nPART F: SORT AND SEARCH');

//  Copy the scores using Array.from.
//  Sort the copy from highest to lowest.
//  Search for 91 using includes and indexOf.
//  Display the results.

const copiedScore = Array.from(studentScores)
copiedScore.sort((a,b) => a - b);
console.log(copiedScore)

console.log('The score 91 can be found in inde num: ', copiedScore.indexOf(91))

console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

//  Use nested loops to process every row and column.
//  Calculate and store each student's activity average.
// "" Display activityAverages.

const activityAverages = [];

for(let i = 0; i < activityScores.length; i++){
  let sum = 0;
  for(let j = 0; j < activityScores[i].length; j++){
  sum += activityScores[i][j];
  }
  let avg = sum / activityScores[i].length;
  
  activityAverages.push(avg);
}

console.log('Activity Averages: ', activityAverages)

console.log('\nPART H: TEXT SUMMARY');

//  Use join to display names separated by " | ".
console.log('Student List: ' +  studentNames.join(' | '))
