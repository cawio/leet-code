/**
 * You are given two integer arrays students and sandwiches
 * where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack)
 * and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue).
 * Return the number of students that are unable to eat.
 *
 * see: https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
 */
export function countStudents(students: number[], sandwiches: number[]): number {
    let hungryStudents = students.length;
    while(sandwiches.length > 0 && hungryStudents > 0 && students.some(preference => preference == sandwiches[0])) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            hungryStudents--;
        } else {
            students.push(students.shift()!);
        }
    }

    return hungryStudents;
};
