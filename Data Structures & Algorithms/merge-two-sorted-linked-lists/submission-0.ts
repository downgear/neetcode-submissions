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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let newHead: ListNode = new ListNode()
        let curr = newHead
        while (list1 || list2) {
            if (!list1) {
                curr.next = list2
                list2 = list2.next
            }
            else if (!list2) {
                curr.next = list1
                list1 = list1.next
            }
            else if (list1.val <= list2.val) {
                curr.next = list1
                list1 = list1.next
            }
            else {
                curr.next = list2
                list2 = list2.next
            }
            curr = curr.next
        }
        return newHead.next
    }
}
