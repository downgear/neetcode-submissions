class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let newS: string = ''
        for (const c of s) {
            if (this.isAlphanumeric(c)) newS += c.toLowerCase()
        }
        let i = 0;
        let j = newS.length - 1;
        while (i < j) {
            if (newS[i] != newS[j]) return false
            i++
            j--
        }
        return true
    }

    isAlphanumeric(char: string): boolean {
        return (
            (char >= '0' && char <= '9') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= 'a' && char <= 'z')
        );
    }
}
