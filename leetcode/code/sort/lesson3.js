// 给定一个无序的数组，找出数组在排序之后，相邻元素之间最大的差值。

// 如果数组元素个数小于 2，则返回 0。

// 示例 1:

// 输入: [3,6,9,1]
// 输出: 3
// 解释: 排序后的数组是 [1,3,6,9], 其中相邻元素 (3,6) 和 (6,9) 之间都存在最大差值 3。
// 示例 2:

// 输入: [10]
// 输出: 0
// 解释: 数组元素个数小于 2，因此返回 0。
// https://leetcode-cn.com/problems/maximum-gap/


// 第一种方法
// export default (arr) => {
//   if (arr.length < 2) {
//     return 0
//   }
//   arr.sort()
//   let max = 0
//   for (let i = 0, len = arr.length - 1, tmp; i < len; i++) {
//     tmp = arr[i + 1] - arr[i]
//     if(tmp > max) {
//       max = tmp
//     }
//   }
//   return max
// }

// 以上方法的不足：在排序的过程中已经知道相邻元素的差值，没有必要再遍历一次。

// 第二种方法：利用冒泡排序提升性能
export default (arr) => {
  if (arr.length < 2) {
    return 0
  }
  let max = 0 // 记录最大插值
  let len = arr.length - 1
  let space // 记录两个变量之间的差值
  for (let i = len, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      tmp = arr[j]
      if (tmp > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }

    // 第一轮是 i = len; 一个值无法做区间，最起码得从第二轮开始
    if (i < len) {

      // 因为i遍历的最小值为1，所以导致这个地方最多能计算到arr[2]-arr[1]
      space = arr[i + 1] - arr[i]
      if (space > max) {
        max = space
      }
    }
  }
  return Math.max(max, arr[1] - arr[0]) // 解决i=0的情况
}