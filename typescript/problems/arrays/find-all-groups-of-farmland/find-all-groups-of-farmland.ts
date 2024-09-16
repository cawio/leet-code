export function findFarmland(land: number[][]): number[][] {
    const result = [];
    const rows = land.length;
    const cols = land[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (land[i][j] === 1) {
                const farmland = [i, j, i, j];
                dfs(land, i, j, farmland);
                result.push(farmland);
            }
        }
    }

    return result;
}

function dfs(land: number[][], i: number, j: number, farmland: number[]) {
    if (i < 0 || i >= land.length || j < 0 || j >= land[0].length || land[i][j] === 0) {
        return;
    }

    land[i][j] = 0;

    if (i < farmland[0]) {
        farmland[0] = i;
    }
    if (i > farmland[2]) {
        farmland[2] = i;
    }
    if (j < farmland[1]) {
        farmland[1] = j;
    }
    if (j > farmland[3]) {
        farmland[3] = j;
    }

    dfs(land, i + 1, j, farmland);
    dfs(land, i - 1, j, farmland);
    dfs(land, i, j + 1, farmland);
    dfs(land, i, j - 1, farmland);
}
