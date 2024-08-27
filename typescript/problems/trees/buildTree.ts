import { TreeNode } from "./TreeNode";

export function buildTree(arr: (number|null)[], index: number = 0): TreeNode | null {
    if (index >= arr.length || arr[index] === null) {
        return null;
    }

    let node = new TreeNode(arr[index]);
    node.left = buildTree(arr, 2 * index + 1);
    node.right = buildTree(arr, 2 * index + 2);

    return node;
}