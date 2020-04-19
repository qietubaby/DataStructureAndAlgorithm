
// 第K个最大值
// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// [6,5,4,3,2,1] 第二个自然是 5
// 输出: 5

// export default(arr, k) => {
//   return arr.sort((a,b) => b-a)[k-1]
// }

// 利用冒泡性能更好，因为冒泡是最大的值像右排
export default (arr, k) => {
  let len = arr.length - 1
  for (let i = len, tmp; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr[len - (k - 1)]
}
