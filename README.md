# 308-JavaScript-Fundamentals
Hey Hey Hey this is my SBA!

You will create a script that gathers data, processes it, and then outputs a consistent result as described by a specification. This is a very typical situation in industry, and this particular scenario has been modified from a real application. The data you will use is provided below.

Your goal is to analyze and transform this data such that the output of your program is an array of objects, each containing the following information in the following format:

//{
    // the ID of the learner for which this data has been collected
      //"id": number,
    // the learner’s total, weighted average, in which assignments
    // with more points_possible should be counted for more
    // e.g. a learner with 50/100 on one assignment and 190/200 on another
    // would have a weighted average score of 240/300 = 80%.
      //"avg": number,
    // each assignment should have a key with its ID,
    // and the value associated with it should be the percentage that
    // the learner scored on the assignment (submission.score / points_possible)
      //<assignment_id>: number,
    // if an assignment is not yet due, it should not be included in either
    // the average or the keyed dictionary of scores
//} 

If an AssignmentGroup does not belong to its course (mismatching course_id), your program should throw an error, letting the user know that the input was invalid. Similar data validation should occur elsewhere within the program.

You should also account for potential errors in the data that your program receives. What if points_possible is 0? You cannot divide by zero. What if a value that you are expecting to be a number is instead a string? 

Use try/catch and other logic to handle these types of errors gracefully.

If an assignment is not yet due, do not include it in the results or the average. 

Additionally, if the learner’s submission is late (submitted_at is past due_at), deduct 10 percent of the total points possible from their score for that assignment.

Create a function named getLearnerData() that accepts these values as parameters, in the order listed: (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result, which should be an array of objects as described above.

You may use as many helper functions as you see fit.

function getLearnerData(course, ag, submissions) {
  const result = [
    {
      id: 125,
      avg: 0.985, // (47 + 150) / (50 + 150) *100 for the percentage 
      1: 0.94, // 47 / 50 *100 for the percentage 
      2: 1.0 // 150 / 150 *100 for the percentage 
    },
    {
      id: 132,
      avg: 0.82, // (39 + 125) / (50 + 150) *100 for the percentage 
      1: 0.78, // 39 / 50 *100 for the percentage 
      2: 0.833 // late: (140 - 15) / 150 *100 for the percentage 
    }
  ];
}
  return result;

PLANNING!

id: output learner ID one at a time
ave: calculate weighted score from all student sumbmitted assignments the score/possible_points as a %
assignment_id: % score for that assignment (submission.score / points_possible)
return {
  id: 'name'
  avg: %
  assignment_id: number
  assignment_id: number
}
what to output if points_possible: 0 can not / by 0
always convert score/id's/possible_points to Number()
try/catch for other errors 
omiting assignments not due yet
calculate assignment score -10% if it is late **lots of date manipluation

REQUIERMENTS! *****absolute minimums*****

[ x]Declare variables properly using let and const where appropriate.
[ x]Use operators to perform calculations on variables and literals.
[ x]Use strings, numbers, and Boolean values cached within variables.
[ x]Use at least two if/else statements to control program flow. Optionally, use at least one switch statement.
[ x]Use try/catch statements to manage potential errors in the code, such as incorrectly formatted or typed data being fed into your program.
Utilize at least two different types of loops.
[ x]Utilize at least one loop control keyword such as break or continue.
[ x]Create and/or manipulate arrays and objects.
[ x]Demonstrate the retrieval, manipulation, and removal of items in an array or properties in an object.
[ x]Use functions to handle repeated tasks.
Program outputs processed data as described above. Partial credit will be earned depending on the level of adherence to the described behavior.
Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
[ x]Commit frequently to the git repository.
[ x]Include a README file that contains a description of your application.

TIPS AND TRICKS
Provided by: Fatou 
add try catch to everything first line to last
try {} catch (error) {
  console.log(object);
}
Provided by: Oussama! turns out find stops once it finds it and does not keep looing map and forEach are better for most uses 
look in to .find to search the objects once your searching inside the array and to an object to search. Also put a random word in your console.log(item, 'word') so you know which one is the undefinded while you are troulbe shooting.
Provided by: Tarence!
? in a .find method
It’s called optional chaining. I don’t think we learned it in class it’s kinda new JavaScript. Rmm the Russian doll example when it comes to nesting ?  It’s basically like you’re looking for a specific doll but there’s dolls within dolls. So instead of searching the normal way and getting an error message bc your doll isn’t in the location  you can have the imaginary  helper peek inside to let you know your doll isn’t there.


THINGS I TRIED THAT DIDNT WORK

//*****only spitting out one unique variable
// const uniqueValues = learnerId.filter(  
//   (item, index, self) =>
//     index === self.findIndex((t) => t.id === item.id),
// );
// console.log(uniqueValues);
// i dont like this one either it only pulls the learner id number but looses the key!
// let uniqueNum = learnerId.map(item => item.learner_id).filter((value, index, self) =>
//   self.indexOf(value) === index);
// console.log(uniqueNum);
// const score = learner.filter(score => learner.submission == submission.score)
// console.log(score);
console.log(assignmentGroup.assignments.filter(notDue => Number(notDue.due_at) > date), 'pineapple');
const arr = assignmentGroup.assignments.filter(notDue => Number(notDue.due_at) > Date.now()); 
console.log(arr, 'mango');
console.log(assignmentGroup.assignments[0].due_at);
assignmentGroupArr = assignmentGroup.assignments.filter(due => Number(due.due_at) < date);
console.log(assignmentGroupArr, 'lemon');
const assigndue = assignmentGroup.assignments.forEach((obj, index, array)=> {
  if(Number(obj.due_at) < date)
  return obj[index]
});
console.log(assigndue, 'hog plum');
const dueAssignments = assignmentGroup.assignments.filter(function(ele){
  return ele < date;
})
  if (Number(assignmentGroup.assignments[0].due_at) < date){
    console.log(date);
  return []
  }
console.log(assignmentGroup, 'dragon fruit');
const assignPosPoi = assignmentGroup.assignments.find((arr, index) => Number(arr.points_possible)?.points_possible);
console.log(assignPosPoi, 'pear');
if(leaId === assignId){
  console.log(leaSco/assignPosPoi,'kiwi');
   return leaSco/assignPosPoi
}
learnerSubmissions.sort((a, b) => a.assignment_id - b.assignment_id)
console.log(learnerSubmissions);
const leaId = learnerSubmissions[0].assignment_id // this works for learner ID
const assignId = assignmentGroup.assignments.find((arr)=> arr.id)?.id; // this works prints str with matching id
const leaSco = learnerSubmissions[0].submission.score // this work for learner assignment score
console.log(leaSco, 'orange');
console.log(leaId, 'nectarine');
console.log(assignId, 'fruit salad');
const aGAssign = assignmentGroup.assignments.find((arr)=> arr.id)?.points_possible;
console.log(aGAssign, 'mangansteen');
function strId(id){
  console.log(aGAssign.id, 'lychee');
}
  let scorePer = [...percent]
  if(leaId == assignId){
    console.log(posSco/scoAct, 'kiwi');
  }
  console.log(learnerSubmissions[0].submission.score / assignmentGroup.assignments.find((arr)=> arr.points_possible), 'indian apple')
console.log(learnerSubmissions[0].assignment_id, 'grape'); // assignment number in learnerSubmission
console.log(assignmentGroup.assignments.find((id)=> id.id = learnerSubmissions[0].assignment_id), 'honeydew'); //not spitting out yet
console.log(learnerSubmissions[0].submission.score);
console.log(assignmentGroup.assignments.find((points_possible)=> points_possible)); //not spitting out yet
  let uniqueNum = learnerId.map(item => item.learner_id).filter((value, index, self) =>
    self.indexOf(value) === index
  );
    uniqueNum.forEach(num => {
    return {
      id: getlearnerID
    }
  })
let dueDate = assignmentGroup.assignments[0]?.due_at
let doit = [...assignmentGroup.assignments]
const turnItIn = assignmentGroup.assignments.filter(function (dueDate) {
  // const date = new Date();
});
