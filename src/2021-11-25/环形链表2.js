const { generateList, ListNode } = require('../../linkList')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
	let slow = head
	let fast = head.next

	while (fast !== slow && fast !== null && fast.next !== null) {
		slow = slow.next
		fast = fast.next.next
	}

	slow.
}
