/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let left = head
        let right = head?.next
        while (left && right) {
            if (left == right) {
                return true
            }
            left = left.next
            right = right.next?.next
        }
        return false
    }
}
