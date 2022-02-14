import { maxDepth, TreeNode } from "./_104_maximumDepthOfBinaryTree";

function printTree(tree: TreeNode) {
  const printRow: string[][] = [[`${tree.val}`]];

  let currentRow: (TreeNode | null)[] = [tree.left, tree.right];

  while (currentRow.length > 0) {
    const nextRow: (TreeNode | null)[] = [];
    const currentPrintRow: string[] = [];

    let hadNonNull: boolean = false;

    for (const tree of currentRow) {
      nextRow.push(tree?.left ?? null);
      nextRow.push(tree?.right ?? null);

      currentPrintRow.push(`${tree?.left?.val ?? "_"}`);
      currentPrintRow.push(`${tree?.right?.val ?? "_"}`);

      hadNonNull = hadNonNull || !!tree?.left || !!tree?.right;
    }

    printRow.push(currentPrintRow);

    if (hadNonNull) {
      currentRow = nextRow;
    } else {
      currentRow = [];
    }
  }

  const maxLength = printRow[printRow.length - 1].length * 2;
  let printString = "";

  for (const row of printRow) {
    printString += row
      .join(" ")
      .padStart(maxLength, ".")
      .padEnd(maxLength * 2, ".");

    printString += "\n";
  }

  console.log(printString);
}

function createTreeFromArray(arr: (number | null)[]): TreeNode | null {
  if (arr.length === 0) {
    return null;
  }

  const initial = new TreeNode(arr[0]);
  let inputNodeRow: TreeNode[] = [initial];
  let nextRow: TreeNode[] = [];

  for (let i = 1; i < arr.length; i += 2) {
    if (inputNodeRow.length === 0) {
      inputNodeRow = nextRow;
      nextRow = [];
    }

    const inputNode = inputNodeRow.shift();

    const left = arr[i];
    const right = arr[i + 1];

    if (left) {
      inputNode.left = new TreeNode(left);
      nextRow.push(inputNode.left);
    }

    if (right) {
      inputNode.right = new TreeNode(right);
      nextRow.push(inputNode.right);
    }
  }

  printTree(initial);
  return initial;
}

describe("_104_maximumDepthOfBinaryTree", () => {
  it("Should work", () => {
    /*expect(
      maxDepth(createTreeFromArray([3, 9, 20, null, null, 15, 7]))
    ).toEqual(3);*/

    expect(
      maxDepth(
        createTreeFromArray([3, 9, 20, 1, null, 15, 7, 1, 2, 3, 4, 5, 6])
      )
    ).toEqual(3);

    expect(maxDepth(createTreeFromArray([1, null, 2]))).toEqual(2);
  });
});
