export function construct2DArray(original: number[], m: number, n: number): number[][] {
    if (m * n !== original.length) {
        return [];
    }
    const result: number[][] = [];
    for (let i = 0; i < m; i++) {
        const row: number[] = [];
        for (let j = 0; j < n; j++) {
            row.push(original[i * n + j]);
        }
        result.push(row);
    }
    return result;
}
