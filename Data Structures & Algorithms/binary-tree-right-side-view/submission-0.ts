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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        if (!root) return []
        const queue: TreeNode[] = [root]
        const res: number[] = []
        while (queue.length) {
            let length = queue.length
            const arr = []
            while (length) {
                const node = queue.shift()
                length--
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
                arr.push(node.val)
            }
            res.push(arr.at(-1))
        }
        return res
    }
}
