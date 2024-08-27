/**
 * Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
 * You must solve the problem without using any built-in library for handling large integers (such as BigInteger).
 * You must also not convert the inputs to integers directly.
 *
 * see: https://leetcode.com/problems/add-strings
 */
export function addStrings(num1: string, num2: string): string {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = '';

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? parseInt(num1[i--], 10) : 0;
        const digit2 = j >= 0 ? parseInt(num2[j--], 10) : 0;
        const sum = digit1 + digit2 + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
    }

    return result;
}
