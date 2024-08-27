/**
 * A super ugly number is a positive integer whose prime factors are in the array primes.
 * Given an integer n and an array of integers primes, return the nth super ugly number.
 * The nth super ugly number is guaranteed to fit in a 32-bit signed integer.
 *
 * see: https://leetcode.com/problems/super-ugly-number/
 */
export function nthSuperUglyNumber(n: number, primes: number[]): number {
    const dp: number[] = new Array(n + 1).fill(0);
    dp[0] = 1;

    const index: number[] = new Array(primes.length).fill(0);
    const value: number[] = primes.slice(); // Copy primes array

    for (let i = 1; i <= n; i++) {
        dp[i] = Math.min(...value);

        for (let j = 0; j < value.length; j++) {
            if (dp[i] === value[j]) {
                value[j] = dp[++index[j]] * primes[j];
            }
        }
    }

    return dp[n - 1];
}