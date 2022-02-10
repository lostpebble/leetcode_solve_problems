export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function divmod(a: number, b: number): [number, number] {
  return [~~(a / b), a % b];
}

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  const dummyRoot = new ListNode();
  let current = dummyRoot;
  let carry = 0;

  while (carry > 0 || l1 || l2) {
    let valOne = 0;
    let valTwo = 0;

    if (l1) {
      valOne = l1.val;
      l1 = l1.next;
    }

    if (l2) {
      valTwo = l2.val;
      l2 = l2.next;
    }

    let newVal = valOne + valTwo + carry;

    if (newVal > 9) {
      carry = 1;
      newVal = newVal - 10;
    } else {
      carry = 0;
    }

    current.next = new ListNode(newVal);
    current = current.next;
  }

  return dummyRoot.next;
}

export const _2_add_two_numbers = {
  addTwoNumbers,
};
