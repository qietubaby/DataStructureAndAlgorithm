// 选择排序
// 不断的拿出最小值放到最左边 选择性的交换  n²  稳定

export default (arr) => {
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
    }
    return arr
}