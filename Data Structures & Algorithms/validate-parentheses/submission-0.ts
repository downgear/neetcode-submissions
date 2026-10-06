class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = []
        for (const c of s) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c)
            }
            else if (c == ')' && stack.at(-1) !== '(') return false
            else if (c == '}' && stack.at(-1) !== '{') return false
            else if (c == ']' && stack.at(-1) !== '[') return false
            else stack.pop()
        }
        return stack.length == 0;
    }
}
