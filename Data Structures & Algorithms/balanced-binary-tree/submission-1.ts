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
    private map: Map<TreeNode, number> = new Map()

    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        if (!root) return true
        if (Math.abs(this.getHeight(root.left) - this.getHeight(root.right)) > 1) return false
        return this.isBalanced(root.left) && this.isBalanced(root.right)
    }

    getHeight(root: TreeNode | null): number {
        if (!root) return 0
        const pre = this.map.get(root)
        if (pre) return pre
        const calc = 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right))
        this.map.set(root,calc)
        return calc
    }
}
