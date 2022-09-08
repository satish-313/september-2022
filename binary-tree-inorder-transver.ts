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
let b = new TreeNode(2);
let c = new TreeNode(3);
let d = new TreeNode(4);

a.left = d;
a.right = b;
b.left = c;

const inorderTranersal = (root: TreeNode ):number[] => {
  const result: number[] = [];

  const inorder = (root: TreeNode,result:number[]):void => {
    if (root === null) return;

    if (root?.left) inorder(root.left,result);
    result.push(root.val);
    if (root?.right) inorder(root.right,result);
  }

  inorder(root,result)

  return result
}

const inorderTranersalRec = (root: TreeNode | null):number[] => {
  const result:number[] = [];
  if ( root === null) return result;

  if (root?.left) {
    const r = inorderTranersalRec(root.left);
    if(r) result.push(...r)
  }
  result.push(root.val);
  if (root?.right) {
    const r = inorderTranersalRec(root.right);
    if (r) result.push(...r)
  }
  return result
}

console.log(inorderTranersal(a))
console.log(inorderTranersalRec(a))