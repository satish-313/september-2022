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

let a = new TreeNode(1);
let b = new TreeNode(0);
let c = new TreeNode(0);
let d = new TreeNode(1);

a.right = b;
b.left = c;
b.right = d;

const pruneTree = (root:TreeNode|null):TreeNode|null => {
  if (root === null) return null;
  let current = root;

  return root
}