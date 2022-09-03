const numsSameConsecDiff = (n: number, k: number): number[] => {
  const result: number[] = [];

  const backtrack = (n:number,k:number,value:number,result:number[]): void => {
    if ( n <  0) return;
    
    if ( n === 0) {
      result.push(value);
      return
    }

    for (let i:number=0; i<=9;i++) {
      let lastValue:number = Number(value.toString().split("").pop())
      if ( Math.abs(i-lastValue) === k ) backtrack(n-1,k,value*10+i,result)
    }
  };

  for (let i: number = 1; i <= 9; i++) {
    backtrack(n-1,k,i,result);
  }

  return result;
};

console.log(numsSameConsecDiff(3, 7));
