export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function buildTree(arr: (number|null)[], index: number = 0): TreeNode | null {
    if (index >= arr.length || arr[index] === null) {
        return null;
    }

    let node = new TreeNode(arr[index]);
    node.left = buildTree(arr, 2 * index + 1);
    node.right = buildTree(arr, 2 * index + 2);

    return node;
}

export function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let sum = 0;
    if (root.left && !root.left.left && !root.left.right) {
        sum += root.left.val;
    }

    return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
};