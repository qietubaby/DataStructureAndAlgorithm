/*
复原ip地址
给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

示例:

输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]

递归
*/
export default (str) => {
 // 保存所有符合条件的ip
 let r = []

 // 递归函数 cur是上一次处理的结果，sub是待处理的字符串
 let search = (cur, sub) => {
  //递归的边界，ip地址有四部分，如果四部分合起来的长度等于4并且四部
  //分加起来的字符串跟原字符串一致，表明符合要求
  if (cur.length === 4 && cur.join('') === str) {
   r.push(cur.join('.'))
  } else {
   // tmp 临时变量是待处理字符串的子串
   // 小于3
   for (let i = 0, len = Math.min(3, sub.length), tmp; i < len; i++) {
    tmp = sub.substr(0, i + 1)
    if (tmp < 256) {
     search(cur.concat([tmp]), sub.substr(i + 1))
    }
   }
  }

 }
 search([], str)

 return r
}