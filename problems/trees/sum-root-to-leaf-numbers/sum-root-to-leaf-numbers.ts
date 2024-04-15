import type { TreeNode } from "../TreeNode";

/**
 * You are given the root of a binary tree containing digits from 0 to 9 only.
 * Each root-to-leaf path in the tree represents a number.
 *
 * For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
 *
 * Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
 *
 * A leaf node is a node with no children.
 *
 * see: https://leetcode.com/problems/sum-root-to-leaf-numbers/
 */
export function sumNumbers(root: TreeNode | null): number {
    return sumNumbersRecursive(root, 0);
};

function sumNumbersRecursive(node: TreeNode | null, sum: number): number {
    if (!node) {
        return 0;
    }

    sum = sum * 10 + node.val;

    if (!node.left && !node.right) {
        return sum;
    }

    return sumNumbersRecursive(node.left, sum) + sumNumbersRecursive(node.right, sum);
}