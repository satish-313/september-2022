class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

let a = new TreeNode(3);
let b = new TreeNode(9);
let c = new TreeNode(20);
let d = new TreeNode(15);
let e = new TreeNode(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

let a1 = new TreeNode(1);
let a2 = new TreeNode(2);
let a3 = new TreeNode(3);
let a4 = new TreeNode(4);
let a5 = new TreeNode(5);
let a6 = new TreeNode(6);
let a7 = new TreeNode(7);
let a8 = new TreeNode(8);

a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a6;
a3.left = a5;
a3.right = a7;
a4.right = a8;

let b0 = new TreeNode(0);
let b1 = new TreeNode(1);
let b2 = new TreeNode(2);
let b3 = new TreeNode(3);

b0.left = b1;
b1.left = b2;
b1.right = b3;

let c0 = new TreeNode(3);
let c1 = new TreeNode(1);
let c2 = new TreeNode(4);
let c3 = new TreeNode(0);
let c4 = new TreeNode(2);
let c5 = new TreeNode(2);

c0.left = c1;
c0.right = c2;
c1.left = c3;
c1.right = c4;
c2.left = c5;

class obj {
  node: TreeNode | null;
  x: number;
  y: number;

  constructor(node: TreeNode | null, x: number, y: number) {
    this.node = node === undefined ? null : node;
    this.x = x;
    this.y = y;
  }
}

const verticalTraversal = (root: TreeNode | null): number[][] => {
  const result: number[][] = [];
  let stack: [number, number, TreeNode | null][] = [[0, 0, root]];
  let arr: [number, number, number][] = [];

  while (stack.length > 0) {
    let [x, y, node]: any = stack.pop();
    arr.push([x, y, node.val]);

    if (node?.right) stack.push([x + 1, y + 1, node.right]);
    if (node?.left) stack.push([x + 1, y - 1, node.left]);
  }

  arr.sort((a, b) => a[1] - b[1] || a[0] - b[0] || a[2] - b[2]);

  for (let i: number = 0; i < arr.length; i++) {
    result.push([arr[i][2]]);
    while (i + 1 < arr.length && arr[i][1] === arr[i + 1][1]) {
      result[result.length - 1].push(arr[i + 1][2]);
      i += 1;
    }
  }

  return result;
};

console.log(verticalTraversal(c0));
