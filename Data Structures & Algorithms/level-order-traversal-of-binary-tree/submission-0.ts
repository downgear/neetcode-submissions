/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        const queue: [TreeNode,number][] = [[root,0]]
        const res: number[][] = []
        while (queue.length) {
            const [node, level] = queue.shift()
            if (!node) continue
            queue.push([node.left, level + 1], [node.right, level + 1])
            if (!res[level]) res[level] = []
            res[level].push(node.val)
        }
        return res
    }
}
