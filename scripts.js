console.log("Hey Hey Hey this is my SBA!");

// The provided course information.
const courseInfo = { id: 451, name: "Introduction to JavaScript" };

// The provided assignment group.
const assignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};
// const date = new Date();
// console.log(date);
// const dueAssign = assignmentGroup.assignments.filter(assignment => {
//   const dueDate = new Date(assignment.due_at);
//   return dueDate <= date; // Include only assignments that are due or past due
// });
// console.log(dueAssign);
// The provided learner submission data.
const learnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: { Submitted_at: "2023-01-25", score: 47 },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: { submitted_at: "2023-02-12", score: 150 },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: { submitted_at: "2023-01-25", score: 400 },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: { submitted_at: "2023-01-24", score: 39 },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: { Submitted_at: "2023-03-07", score: 140 },
  },
];
// let idnum = learnerSubmissions.forEach((obj, index, array)=> {
//   (array[index].assignment_id);
// })
// let idNum = assignmentGroup.assignments.forEach((obj, index, array)=> {
//   (array[index].id);
// })
// const assignPoi = dueAssign.reduce((map, assignment) => {
//   map[assignment.id] = assignment.points_possible;
//   return map;
// }, {}); //console.log(assignPoi);
// learnerSubmissions.forEach(submission => {
//   const assignmentId = submission.assignment_id;
//   // console.log(assignmentId);
//   const score = submission.submission.score;
// console.log(score);
// while(assignment.id === assignmentId){
//   console.log(assignPoi/score)
// }
// });

// function student(arr){
//   const learnerId = arr.map(function (obj) { return Number(obj.learner_id)});
//   const uniqueNum = learnerId.map(num => num).filter((value, index, self) =>self.indexOf(value) === index);
//     uniqueNum; //pulls unique numbers to use not the best way to pull and then push
// }
// const studentId = student(learnerSubmissions)
// function scoreInfo(learnerID){
//   const arr = learnerSubmissions.filter(learner => learner.learner_id == learnerID);
//   for(i=0; i<arr.length; i++){
//     const learnArr = arr[i];
//     if (arr[i].learner_id == learnerID){
//       continue;
//     } pulled learner array sperately but not nesscesary
//   }
// }
// const indviScore = scoreInfo(125)
// function getlearnerID(firstoutput){
//   let learnerId = learnerSubmissions.map(function (obj) {
//         return {
//           learner_id: Number(obj.learner_id),
//         }
//   })
// }
// Function to get unique learner IDs
// function student(arr) {
//   const uniqueIds = [...new Set(arr.map(obj => obj.learner_id))];
//   // console.log(uniqueIds);
//   return uniqueIds;
// }
// const studentId1 = student(learnerSubmissions)

// Function to get submission info for a specific learner
// function scoreInfo(learnerID) {
//   const learnerScores = learnerSubmissions.filter(learner => learner.learner_id === learnerID);
//   learnerScores.forEach(score => {
//     // console.log(`id: ${score.assignment_id}, Score: ${score.submission.score}`);
//   });
// }
// const indviScore1 = scoreInfo(125)



// ***************final function*************
function calculateAssignmentScores(assignmentGroup, learnerSubmissions) {
  try {
    const date = new Date();
    // Filter for due assignments
    const dueAssignments = assignmentGroup.assignments.filter((assignment) => {
      const dueDate = new Date(assignment.due_at);
      return dueDate <= date; // Include only assignments that are due or past due
    });
    // Create a map for assignment points_possible for easier lookup
    const assignPoi = dueAssignments.reduce((map, assignment) => {
      map[assignment.id] = assignment.points_possible;
      return map;
    }, {}); //console.log(assignPoi);
    // Initialize an object to hold scores for each learner
    const scores = {};
    // Loop through learner submissions
    for (let i = 0; i < learnerSubmissions.length; i++) {
      const submission = learnerSubmissions[i];
      // Validate learner_id length
      if (submission.learner_id.toString().length > 3) {
        console.log(
          `Omitting learner_id: ${submission.learner_id}. It must not exceed three digits.`
        );
        continue; // Skip this submission
      }
      const assignmentId = submission.assignment_id;
      // console.log(assignmentId);
      const score = submission.submission.score;
      // console.log(score);
      const submittedAt = new Date(
        submission.submission.Submitted_at || submission.submission.submitted_at
      ); // Get submission date
      // console.log(submittedAt);
      // Only process submissions for assignments that are due
      if (assignPoi[assignmentId] !== undefined) {
        const pointsPossible = assignPoi[assignmentId];
        let percentage = score / pointsPossible; // Percentage as a decimal
        // Check if the submission is late
        const dueDate = new Date(
          assignmentGroup.assignments.find((a) => a.id === assignmentId).due_at
        );
        if (submittedAt > dueDate) {
          percentage *= 0.9; // Deduct 10%
        }
        // Initialize the learner in the scores object if not already present
        if (!scores[submission.learner_id]) {
          scores[submission.learner_id] = {
            id: submission.learner_id,
            avg: 0,
            assignments: {},
          };
        }
        // Store the percentage for the specific assignment
        scores[submission.learner_id].assignments[assignmentId] = percentage;
      }
    } // console.log(scores);
    // Calculate averages and format the output
    const result = Object.values(scores).map((learner) => {
      const assignmentPercentages = Object.values(learner.assignments);
      // console.log(assignmentPercentages);
      const avg =
        assignmentPercentages.length > 0
          ? assignmentPercentages.reduce((sum, score) => sum + score, 0) /
            assignmentPercentages.length
          : 0;
      // Create the output object
      const output = {
        id: learner.id,
        avg: Math.round(avg * 100), // Convert to percentage
      };
      // console.log(output);
      // Add individual assignment percentages
      assignmentPercentages.forEach((percentage, index) => {
        output[`assignment_${index + 1}`] = Math.round(percentage * 100); // Store at assignment keys
      });
      return output;
    });
    return result;
  } catch (error) {
    console.error("Uh oh, something went wrong:", error.message);
  }
}
const results = calculateAssignmentScores(assignmentGroup, learnerSubmissions);
console.log(results);



// function getLearnerData(course, ag, submissions) {
//   const result = [
//     {
//       id: 125,
//       avg: 98,
//       1: 94,
//       2: 100
//     },
//     {
//       id: 132,
//       avg: 82,
//       1: 78,
//       2: 83
//     }
//   ];
// }
//   return result;
