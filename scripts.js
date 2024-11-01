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

// The provided learner submission data.
const learnerSubmissions = [
  {learner_id: 125, assignment_id: 1, submission: {Submitted_at: "2023-01-25", score: 47}},
  {learner_id: 125, assignment_id: 2, submission: {submitted_at: "2023-02-12", score: 150}},
  {learner_id: 125, assignment_id: 3, submission: {submitted_at: "2023-01-25", score: 400}},
  {learner_id: 132, assignment_id: 1, submission: {submitted_at: "2023-01-24", score: 39}},
  {learner_id: 132, assignment_id: 2, submission: {Submitted_at: "2023-03-07", score: 140}},
];
let learnerID = 132 // potentually prompt user to input learner ID so this could change 
const learner = learnerSubmissions.filter(learner => learner.learner_id == learnerID)
// console.log(learner);

// [ {learner_id: 125, assignment_id: 1, submission: { Submitted_at: '2023-01-25', score: 47 }},
//   {learner_id: 125, assignment_id: 2, submission: { submitted_at: '2023-02-12', score: 150 }},
//   {learner_id: 125, assignment_id: 3, submission: { submitted_at: '2023-01-25', score: 400 }}]

// or based on other learnerID input you get you can add additional learners with other ID's and it will still provied an array of objects for them 

// [ {learner_id: 132, assignment_id: 1, submission: { submitted_at: '2023-01-24', score: 39 }},
//   {learner_id: 132, assignment_id: 2, submission: { Submitted_at: '2023-03-07', score: 140 }}]

function essInfo(arr){
  for(arr=0; arr<learner.length; arr++){
    let learnArr = learner[arr].submission;
    if (learnArr[arr] = learnerID){
      console.log(learnArr);
    } 
    else { 
      console.log('Not a Learner ID please try');
    }
// ***** Im not sure whta in my code changes the key for learner_id to the arr index number but i can change it back to what i want it to be later
    //  { '0': 125, Submitted_at: '2023-01-25', score: 47 }
    //  { '1': 125, submitted_at: '2023-02-12', score: 150 }
    //  { '2': 125, submitted_at: '2023-01-25', score: 400 } 
    // or based on different learnerID input
    //  { '0': 132, submitted_at: '2023-01-24', score: 39 }
    //  { '1': 132, Submitted_at: '2023-03-07', score: 140 }
    //   return learnArr
    // console.log(learnerSubmissions[arr]);
    // if(arr == 'submission'){
    //   return learner.submission
    // }
  }
}
console.log(essInfo(learner));



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
  console.log(uniqueNum); //pulls unique numbers to use
  // pul out numbers into a string with id:
    uniqueNum.forEach(num => {
    return {
      id: num
    }
  })

 
}
// console.log(getlearnerID(learnerSubmissions));


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