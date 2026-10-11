class TreeNodee {
    constructor(public val = 0, public left = null, public right = null) {}
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root: TreeNodee | null) {
        if (!root) return null;
        [root.left, root.right] = [root.right, root.left]
        this.invertTree(root.left)
        this.invertTree(root.right)
        return root
    }
}
