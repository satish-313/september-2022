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

let a: TreeNode = new TreeNode(3);
let b: TreeNode = new TreeNode(9);
let c: TreeNode = new TreeNode(20);
let d: TreeNode = new TreeNode(15);
let e: TreeNode = new TreeNode(7);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

const averageOfLevel = (root: TreeNode | null): number[] => {
  const resutl: number[] = [];
  let level: (TreeNode | null)[] = [root];

  while (level.length > 0) {
    let total:number = 0;
    let nextLevel: (TreeNode|null)[] = [];

    for (let node of level) {
      total += node!.val
      if (node?.left) nextLevel.push(node.left);
      if (node?.right) nextLevel.push(node.right);
    }

    let avg:number = total/level.length;
    resutl.push(avg)
    level = nextLevel
  }


  return resutl;
};

console.log(averageOfLevel(a));
