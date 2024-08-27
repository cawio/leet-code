import { countStudents } from "./number-of-students-unable-to-eat-lunch";

describe('Arrays: Number of Students Unable to Eat Lunch', () => {
    let students: number[] | undefined;
    let sandwiches: number[] | undefined;
    let expected: number | undefined;

    beforeEach(() => {
        students = undefined;
        sandwiches = undefined;
        expected = undefined;
    });

    test('Example 1', () => {
        // Arrange
        students = [1, 1, 0, 0];
        sandwiches = [0, 1, 0, 1];
        expected = 0;

        // Act
        const result = countStudents(students, sandwiches);

        // Assert
        expect(result).toBe(expected);
    });

    test('Example 2', () => {
        // Arrange
        students = [1, 1, 1, 0, 0, 1];
        sandwiches = [1, 0, 0, 0, 1, 1];
        expected = 3;

        // Act
        const result = countStudents(students, sandwiches);

        // Assert
        expect(result).toBe(expected);
    });
});