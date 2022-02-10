import { _2_add_two_numbers, ListNode } from "./2_add_two_numbers";

function createListNodeFromNumber(num: number): ListNode {
  const dummyRoot = new ListNode(0);
  let current = dummyRoot;
  `${num}`
    .split("")
    .reverse()
    .map((n) => {
      const next = new ListNode(Number(n));
      current.next = next;
      current = next;
    });

  return dummyRoot.next;
}

function convertArrayToListNode(arr: number[]): ListNode {
  const dummyRoot = new ListNode(0);
  let current = dummyRoot;

  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummyRoot.next;
}

function convertListNodeToArray(listNode: ListNode): number[] {
  const arr: number[] = [listNode.val];
  let current: ListNode | null = listNode.next;

  while (current != null) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
}

function createTestCase(num1: number[], num2: number[], result: number[]) {
  expect(
    convertListNodeToArray(
      _2_add_two_numbers.addTwoNumbers(
        convertArrayToListNode(num1),
        convertArrayToListNode(num2)
      )
    )
  ).toEqual(result);
}

describe("2_add_two_numbers", () => {
  it("should work", () => {
    createTestCase([4], [4], [8]);
    createTestCase([1, 1], [1, 1], [2, 2]);
    createTestCase(
      [9, 9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9],
      [8, 9, 9, 9, 0, 0, 0, 1]
    );
  });
});
