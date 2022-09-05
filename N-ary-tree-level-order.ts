class node {
  val: number;
  children: node[];
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val;
    this.children = [];
  }
}

const levelOrder = (root:node|null):number[][] => {
  const result: number[][] = [];
  if ( root === null) return result;

  let level:node[] = [root];

  while(level.length> 0) {
    let nextLevel:node[] = [];
    result.push([]);

    for (let {val,children} of level) {
      result[result.length-1].push(val);

      for(let nextNode of children) {
        nextLevel.push(nextNode)
      }
    }

    level = nextLevel
  }

  return result;
}