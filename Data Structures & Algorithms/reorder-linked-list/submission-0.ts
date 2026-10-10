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
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        // find mid
        let mid = head
        let tmp = head.next
        while (tmp) {
            mid = mid.next
            tmp = tmp.next?.next
        }
        // reverse starting from mid
        let curr = mid.next
        mid.next = null
        let prev = null
        while (curr) {
            tmp = curr.next
            curr.next = prev
            prev = curr
            curr = tmp
        }
        // iterate
        mid = prev
        curr = head
        while (mid) {
            let tmp1 = curr.next
            let tmp2 = mid.next
            curr.next = mid
            mid.next = tmp1
            curr = tmp1
            mid = tmp2
        }
    }
}
