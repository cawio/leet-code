export function findMinDifference(timePoints: string[]): number {
    const minutes = timePoints.map((time) => {
        const [hours, mins] = time.split(':').map(Number);
        return hours * 60 + mins;
    });

    minutes.sort((a, b) => a - b);

    let minDiff = Infinity;
    for (let i = 1; i < minutes.length; i++) {
        minDiff = Math.min(minDiff, minutes[i] - minutes[i - 1]);
    }

    const firstLastDiff = minutes[0] + 24 * 60 - minutes[minutes.length - 1];
    minDiff = Math.min(minDiff, firstLastDiff);

    return minDiff;
}
