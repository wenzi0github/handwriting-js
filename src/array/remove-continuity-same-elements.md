# 移除多个相同连续的元素

## remove continuity same elements

题目：

```javascript
/**
 * @param {number[]} arr
 * @return {number[]}
 */
function eliminate(arr) {}

console.log(eliminate([1, 1, 1, 1, 2]));
// [2]

console.log(eliminate([1, 1, 1, 1, 1, 2]));
// [2]

console.log(eliminate([2, 1, 1, 1, 1, 2, 2, 2]));
// []

console.log(eliminate([1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 3, 3]));
// [2, 2]
```

思路：利用栈的数据结构

```javascript
/**
 * @param {number[]} arr
 * @param {number} minContinuityCount 连续次数超过该数字的，均要删除
 * @return {number[]}
 */
function eliminate(arr, minContinuityCount = 4) {
  const stack = [];

  let i = 0;
  while (i < arr.length) {
    const num = arr[i];
    const { length } = stack;

    if (length === 0) {
      // [num, count], 前一个num表示当前存储的是几，count表示该num的连续个数
      stack.push([num, 1]);
      i++;
      continue;
    }
    if (stack[length - 1][0] === num) {
      // 若当前数字跟栈顶的数字一样，则直接计数
      stack[length - 1][1]++;
      i++;
    } else {
      // 跟栈顶的数字不一样
      if (stack[length - 1][1] >= minContinuityCount) {
        // 若前面的连续数字的个数大于等于4，则弹出
        stack.pop();
      } else {
        // 若不够4个，则将不做任何操作，将当前的数字压入到栈中
        stack.push([num, 1]);
        i++;
      }
    }
  }

  // 结尾时判断一下
  if (stack[stack.length - 1][1] >= minContinuityCount) {
    stack.pop();
  }
  // 栈里留下来的数据，都是连续个数不够4个的，将栈中的数据拿出来，拼接成新的数组，栈里的数据结构比如为[[1,3], [2, 2]]
  // 即有3个1（[1,1,1]），2个2([2,2])，将每个单独的数组拼接成一个大的数组
  return stack.reduce((prev, [num, count]) => prev.concat(new Array(count).fill(num)), []);
}
```
