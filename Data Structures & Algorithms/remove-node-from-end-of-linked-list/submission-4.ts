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
        const dummy = new ListNode(0, head)
        let curr = head;
        let tmp = dummy;
        while (curr) {
            if (n > 0) {
                n--
            }
            else {
                tmp = tmp.next
            }
            curr = curr.next
        }
        tmp.next = tmp.next.next
        return dummy.next
    }
}
