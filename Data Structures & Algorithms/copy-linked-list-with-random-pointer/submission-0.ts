// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        // basically creates node ahead of time
        // if next or random is not created, create them while visiting the current node then assign them later
        const map = new Map();
        map.set(null, null);

        let cur = head;
        while (cur !== null) {
            if (!map.has(cur)) {
                map.set(cur, new Node(0));
            }
            map.get(cur).val = cur.val;
            if (!map.has(cur.next)) {
                map.set(cur.next, new Node(0));
            }
            map.get(cur).next = map.get(cur.next);
            if (!map.has(cur.random)) {
                map.set(cur.random, new Node(0));
            }
            map.get(cur).random = map.get(cur.random);
            cur = cur.next;
        }
        return map.get(head);
    }
}
