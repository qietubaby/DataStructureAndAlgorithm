/*
  冒泡排序  从第一个开始挨个跟后面的数字对比，数字大总向后移。
  时间复杂度 o(n²)  且稳定
*/

export default (arr) => {
    //这行控制遍历的次数  i是边界  tmp是临时变量
    for (let i = arr.length - 1, tmp; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            tmp = arr[j];
            if (tmp > arr[j + 1]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
};


// 插入排序
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        //外循环从1开始，默认arr[0]是有序段
        for (let j = i; j > 0; j--) {
            //j = i,将arr[j]依次插⼊入有序段中
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            } else {
                break;
            }
        }
    }
    return arr;
}
console.log(insertSort([11, 4, 3, 6, 1, 9, 7, 2, 0]));