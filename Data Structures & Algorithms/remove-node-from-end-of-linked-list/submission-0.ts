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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let curr = head;
        let tmp = head;
        let prev = null
        while (curr) {
            if (n > 0) {
                n--
            }
            else {
                prev = tmp
                tmp = tmp.next
            }
            curr = curr.next
        }
        if (tmp == head) return head.next
        else prev.next = tmp.next
        return head
    }
}
