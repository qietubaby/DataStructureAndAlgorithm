// 输入: "00110011"
// 输出: 6
// 解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

// 请注意，一些重复出现的子串要计算它们出现的次数。

// 另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。
export default (str) => {
    // 建立数据结构，堆栈，保存数据
    let r = []
    // 给定任意子输入都返回第一个符合条件的子串
    let matchHandle = (str) => {
        let j = str.match(/^(0+|1+)/)[0]  //假如 j 是两个1，那下面一行 o 就是两个0，可能是1个或者多个
        let o = (j[0] ^ 1).toString().repeat(j.length) // j[0]^1可以理解为取反
        let reg = new RegExp(`^(${j}${o})`)
        if(reg.test(str)){
            return RegExp.$1
        } else {
            return ''
        }
    }
    for(let i = 0, len = str.length - 1;i < len; i++) {
        let sub = matchHandle(str.slice(i))
        if(sub) {
            r.push(sub)
        }
    }
    return r
}


// a = 0
// a ^ 1
// console.log(a)  //1