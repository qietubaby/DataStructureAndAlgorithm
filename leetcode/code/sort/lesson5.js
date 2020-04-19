// 缺失的第一个正数
// https://leetcode-cn.com/problems/first-missing-positive/
// 给定一个未排序的整数数组，找出其中没有出现的最小的正整数。
// 示例 1:
// 输入: [1,2,0]
// 输出: 3

// 示例 2:
// 输入: [3,4,-1,1]
// 输出: 2

// 示例 3:
// 输入: [7,8,9,11,12]
// 输出: 1

/*

export default (arr) => {
  // 过滤掉非正整数
  arr = arr.filter(item => item > 0)

  // 正数数数组是不是为空
  if (arr.length) {
    // 升序，目的：方便从做到右取最小值arr[0]，这种排序换成选择排序运行会更快
    arr.sort((a,b) => a - b)

    // 如果第一个元素不为1，返回1
    if (arr[0] !== 1) {
      return 1
    } else {
      // 从左边开始遍历，只要下一个元素和当前元素插值>1。
      // 说明当前元素的下一个值(+1)就是未出现的最小正整数
      for (let i=0,len = arr.length-1;i<len;i++) {
        if(arr[i+1]-arr[i] > 1) {
          return arr[i] + 1
        }
      }

      // 如果数组是联系的正整数[1,2,3,4,5,6]
      return arr.pop() + 1
    }
  } else {
    return 1
  }
}

*/

export default (arr) => {
  arr = arr.filter(item => item > 0)
  for (let i = 0, len = arr.length, min; i < len; i++) {
    min = arr[i]
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < min) {
        let c = min
        min = arr[j]
        arr[j] = c
      }
    }
    arr[i] = min
    if (i > 0) {
      if (arr[i] - arr[i - 1] > 1) {
        return arr[i - 1] + 1
      }
    } else {
      if(min !== 1) {
        return 1
      }
    }
  }
  return arr.length ? arr.pop() + 1 : 1
}