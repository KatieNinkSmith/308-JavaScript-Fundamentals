console.log('Hey Hey Hey this is my SBA!');

// The provided course information.
const courseInfo = {id: 451, name: "Introduction to JavaScript"};

// The provided assignment group.
const assignmentGroup = {
  id: 12345, name: "Fundamentals of JavaScript", course_id: 451, group_weight: 25, assignments: [
    {id: 1, name: "Declare a Variable", due_at: "2023-01-25", points_possible: 50},
    {id: 2, name: "Write a Function", due_at: "2023-02-27", points_possible: 150},
    {id: 3, name: "Code the World", due_at: "3156-11-15", points_possible: 500}
  ]
};
// let dueDate = assignmentGroup.assignments[0]?.due_at
let doit = [...assignmentGroup.assignments]
const turnItIn = assignmentGroup.assignments.filter(function (dueDate) {
  const date = new Date();
  // console.log(date, 'tomato');
  if(dueDate.due_at <= date)
  // creates a filter with an option for any maxage input
  return [...assignmentGroup]
});
console.log(doit, 'ugli ');

// The provided learner submission data.
const learnerSubmissions = [
  {learner_id: 125, assignment_id: 1, submission: {Submitted_at: "2023-01-25", score: 47}},
  {learner_id: 125, assignment_id: 2, submission: {submitted_at: "2023-02-12", score: 150}},
  {learner_id: 125, assignment_id: 3, submission: {submitted_at: "2023-01-25", score: 400}},
  {learner_id: 132, assignment_id: 1, submission: {submitted_at: "2023-01-24", score: 39}},
  {learner_id: 132, assignment_id: 2, submission: {Submitted_at: "2023-03-07", score: 140}},
];

learnerSubmissions.sort((a, b) => a.assignment_id - b.assignment_id)
// console.log(learnerSubmissions);
const leaId = learnerSubmissions[0].assignment_id // this works for learner ID
const assignId = assignmentGroup.assignments.find((arr)=> arr.id)?.id; // this works prints str with matching id
const leaSco = learnerSubmissions[0].submission.score // this work for learner assignment score
const assignPosPoi = []
// assignmentGroup.assignments.find((arr, index) => Number(arr.points_possible)?.points_possible;
//   return {
//     ...assignmentGroup.assignments.points_possible?.points_possible

//   }
// ) // works to pull just the points_possible number!
console.log(assignPosPoi, 'pear');
console.log(leaSco, 'orange');
console.log(leaId, 'nectarine');
console.log(assignId, 'fruit salad');

let idnum = learnerSubmissions.forEach((obj, index, array)=> {
  console.log(array[index].assignment_id, 'Quince');
})

let idNum = assignmentGroup.assignments.forEach((obj, index, array)=> {
  console.log(array[index].id, 'star fruit');
})
// let newArr = 
// if(leaId === assignId){
//   // console.log(leaSco/assignPosPoi,'kiwi');
//    return leaSco/assignPosPoi
// //    {
// //   1: leaSco/assignPosPoi
// // };
// }
const aGAssign = assignmentGroup.assignments.find((arr)=> arr.id)?.points_possible;
console.log(aGAssign, 'mangansteen');
// aGAssign.forEach(strId)

function strId(id){
  console.log(aGAssign.id, 'lychee');
}
  // let scorePer = [...percent]

  if(leaId == assignId){
    console.log(leaSco/assignPosPoi, 'kiwi');
  }

 // .find
  // console.log(learnerSubmissions[0].submission.score / assignmentGroup.assignments.find((arr)=> arr.points_possible), 'indian apple')

// console.log(learnerSubmissions[0].assignment_id, 'grape'); assignment number in learnerSubmission
// console.log(assignmentGroup.assignments.find((id)=> id.id = learnerSubmissions[0].assignment_id), 'honeydew'); //not spitting out yet
// console.log(learnerSubmissions[0].submission.score); learner score
// console.log(assignmentGroup.assignments.find((points_possible)=> points_possible)); //not spitting out yet

// output of const arr
// [ {learner_id: 125, assignment_id: 1, submission: { Submitted_at: '2023-01-25', score: 47 }},
//   {learner_id: 125, assignment_id: 2, submission: { submitted_at: '2023-02-12', score: 150 }},
//   {learner_id: 125, assignment_id: 3, submission: { submitted_at: '2023-01-25', score: 400 }}]

// or based on other learnerID input you get you can add additional learners with other ID's and it will still provied an array of objects for them 

// [ {learner_id: 132, assignment_id: 1, submission: { submitted_at: '2023-01-24', score: 39 }},
//   {learner_id: 132, assignment_id: 2, submission: { Submitted_at: '2023-03-07', score: 140 }}]
function student(arr){
  const learnerId = arr.map(function (obj) { return Number(obj.learner_id)});
//  console.log(learnerId, 'elderberry'); //pulls out learner ID's
  const uniqueNum = learnerId.map(num => num).filter((value, index, self) =>self.indexOf(value) === index);
    console.log(uniqueNum, 'dragon fruit'); //pulls unique numbers to use
} 
const studentId = student(learnerSubmissions)

function scoreInfo(learnerID){
  const arr = learnerSubmissions.filter(learner => learner.learner_id == learnerID); 
  // console.log(arr, 'apple');
  for(i=0; i<arr.length; i++){
    const learnArr = arr[i];
    // console.log(learnArr, 'banana');
    if (arr[i].learner_id == learnerID){
        console.log(learnArr.submission.score, 'cherry');
      continue;
    } 
  }
}
const indviScore = scoreInfo(132)




// const scoreStr = indviScore.score  
  // sorts out just the age input

  // return Number(person.score);
  

// console.log(scoreStr);


function getlearnerID(firstoutput){
  let learnerId = learnerSubmissions.map(function (obj) {
        return {
          learner_id: Number(obj.learner_id),
        }
  })
//  console.log(learnerId); //pulls out learner ID's

  let uniqueNum = learnerId.map(item => item.learner_id).filter((value, index, self) =>
    self.indexOf(value) === index
  );
  // console.log(uniqueNum, 'dragon fruit'); //pulls unique numbers to use
  // pul out numbers into a string with id:
    uniqueNum.forEach(num => {
    return {
      id: getlearnerID
    }
  })

 
}

// console.log(getlearnerID(), 'Zest');


// function getLearnerData(course, ag, submissions) {
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150) *100 for the percentage 
//       1: 0.94, // 47 / 50 *100 for the percentage 
//       2: 1.0 // 150 / 150 *100 for the percentage 
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150) *100 for the percentage 
//       1: 0.78, // 39 / 50 *100 for the percentage 
//       2: 0.833 // late: (140 - 15) / 150 *100 for the percentage 
//     }
//   ];
// }
//   return result;