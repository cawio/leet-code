/**
 * Given string num representing a non-negative integer num, and an integer k,
 * return the smallest possible integer after removing k digits from num.
 *
 * see: https://leetcode.com/problems/remove-k-digits/
 */
export function removeKdigits(num: string, k: number): string {
    const stack: string[] = [];
    for (const digit of num) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    while (stack.length > 0 && stack[0] === '0') {
        stack.shift();
    }

    return stack.length === 0 ? '0' : stack.join('');
};