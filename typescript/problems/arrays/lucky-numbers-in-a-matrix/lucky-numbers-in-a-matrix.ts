export function luckyNumbers(matrix: number[][]): number[] {
    const luckyNumbers: number[] = [];

    for (const row of matrix) {
        const min = Math.min(...row);
        const minIndex = row.indexOf(min);

        let isMax = true;
        for (const otherRow of matrix) {
            if (otherRow[minIndex] > min) {
                isMax = false;
                break;
            }
        }

        if (isMax) {
            luckyNumbers.push(min);
        }
    }

    return luckyNumbers;
}
