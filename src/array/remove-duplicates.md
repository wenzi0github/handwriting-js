# 移除相同的元素

如有这样的一个数组： `[1,2,3,1,2,2,2,3,4,5,4]`，去除所有的重复元素后，为`[1,2,3,4,5]`：

```javascript
const arr = [1, 2, 3, 1, 2, 2, 2, 3, 4, 5, 4];
```

## 利用 Set 的数据结构

```javascript
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
```

## 使用 includes 或 indexOf 等来检测

```javascript
const removeDuplicates = (arr) => {
  const result = [];

  arr.forEach((item) => {
    if (!result.includes(item)) {
      // insert item if result not includes it
      result.push(item);
    }
  });

  return result;
};
```

## 排序

将相同的元素放到一起，若前后不一样，则可以使用。

不过这存在的一个问题就是，每个元素第一次出现的前后顺序可能会发生变化，如`[2,2,1]`排序后变成了`[1,2,2]`。

```javascript
const removeDuplicates = (arr) => {
  const result = [];
  const { length } = arr;
  if (length <= 0) {
    return result;
  }
  const arrTemp = arr.concat();
  arrTemp.sort();

  result.push(arrTemp[0]);
  let i = 1;
  for (; i < length; i++) {
    if (arrTemp[i] !== arrTemp[i - 1]) {
      result.push(arrTemp[i]);
    }
  }

  return result;
};
```
