class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack = []
        const ops = ['+','-','*','/']
        for (const t of tokens) {
            if (!ops.includes(t)) {
                stack.push(Number(t))
            }
            else {
                const v2 = stack.pop()
                const v1 = stack.pop()
                if (t == '+') stack.push(v1 + v2)
                if (t == '-') stack.push(v1 - v2)
                if (t == '*') stack.push(v1 * v2)
                if (t == '/') stack.push(Math.trunc(v1 / v2))
            }
        }
        return stack.pop()
    }
}
