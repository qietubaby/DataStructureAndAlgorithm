export default (arr) => {
  arr.sort((a, b) => a - b)
  let min = Number.MAX_SAFE_INTEGER //用来保存相同数字最少的分组
  let dst = []
  let result = true
  for (let i = 0, len = arr.length, tmp = []; i < len; i++) {

    // 思想：比较然后分组，如果相同就归为一组，如果不同就再次遍历

    tmp.push(arr[i])
    for (let j = i + 1; j < len - 1; j++) {
      if (arr[i] === arr[j]) {
        tmp.push(arr[j])
      } else {
        if (min > tmp.length) {
          min = tmp.length
        }
        dst.push([].concat(tmp))
        tmp.length = 0
        i = j
        break
      }
    }
  }
  dst.every(item => { //遍历数组 如果没有余数则说明可以分组 返回true
    if (item.length % min !== 0) {
      result = false
      return false
    }
  })
  return result
}