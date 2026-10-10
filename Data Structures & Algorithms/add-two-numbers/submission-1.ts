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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode {
        let c1 = l1, c2 = l2
        let dummy = new ListNode(0, null)
        let curr = dummy
        let carry = 0
        while (c1 || c2) {
            let v1: number = c1?.val ?? 0
            let v2: number = c2?.val ?? 0
            let v = v1 + v2 + carry
            if (v >= 10) {
                carry = Number(v.toString().at(0))
                v = v % 10
            }
            else carry = 0
            curr.next = new ListNode(v, null)
            curr = curr.next
            if (c1) c1 = c1.next
            if (c2) c2 = c2.next
        }
        if (carry) curr.next = new ListNode(carry, null)
        return dummy.next
    }
}
