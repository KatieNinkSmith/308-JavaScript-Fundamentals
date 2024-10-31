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
output errors when assignemnt_id dose not match courseInfo id:
what to output if points_possible: 0 can not / by 0
always convert score/id's/possible_points to Number()
try/catch for other errors 
omiting assignments not due yet
calculate assignment score -10% if it is late **lots of date manipluation

REQUIERMENTS! *****absolute minimums*****

[ x]Declare variables properly using let and const where appropriate.
Use operators to perform calculations on variables and literals.
Use strings, numbers, and Boolean values cached within variables.
Use at least two if/else statements to control program flow. Optionally, use at least one switch statement.
Use try/catch statements to manage potential errors in the code, such as incorrectly formatted or typed data being fed into your program.
Utilize at least two different types of loops.
Utilize at least one loop control keyword such as break or continue.
Create and/or manipulate arrays and objects.
Demonstrate the retrieval, manipulation, and removal of items in an array or properties in an object.
Use functions to handle repeated tasks.
Program outputs processed data as described above. Partial credit will be earned depending on the level of adherence to the described behavior.
Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
Commit frequently to the git repository.
Include a README file that contains a description of your application.