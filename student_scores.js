// Declare the list of students scores
let scores = [90, 86, 94, 75, 89];
// Display Header + Raw Scores
console.log("Student Scores:");
for(let i = 0; i < scores.length; i++){
    console.log(scores[i]);
}
console.log("");// Add Blank Spacing 
// Display Student Number + Status Per Student
for(let i = 0; i < scores.length; i++){
    let studentNum = i + 1;
    let grades = scores[i];
    let status;
    // Check the Range and Assign Status 
    if(grades >= 90){
        status = " - Excellent - Passed";
    }
    else if(grades >= 80){
        status = " - Very Good - Passed";
    }
    else if(grades >= 75){
        status = " - Good - Passed";
    }
    else {
        status = "Failed";
    }
    console.log("Student "+ studentNum + status);
}



console.log("");

let total = 0;
let highest = scores[0];
let lowest = scores[0];
let passed = 0;
let failed = 0;
// Calculate Total, Highest, Lowest, Pass/Fail Count
for(let i = 0; i < scores.length; i++){
    const score = scores[i];
    total += score;

    if (score > highest){
        highest = score;
    }
    if (score < lowest) {
        lowest = score;
    }
    if (score >= 75) passed++
    else failed++
}
// Print All Final Summary Results 
    console.log("Total Score: "+ total)
    console.log("Average: "+ total / scores.length);
    console.log("Highest: "+ highest);
    console.log("Lowest: "+ lowest);
    console.log("Passed: "+ passed);
    console.log("Failed: "+ failed);