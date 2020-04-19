/*
 * 正则表达式匹配
 * 规则：给定一个字符串(s) 和一个字符模式(p)。实现支持'.'和'*'的正则表达式匹配。
 
 * '.' 匹配任意单个字符。  (注意这不是正则的那个规则，而是题目定的规则)
 * '*' 匹配零个或多个前面的元素。 
 * 
 *  匹配应该覆盖整个字符串(s),而不是部分字符串
 * 
 * 说明:
 *  s 可能为空，且包含从 a-z 的小写字母。
 *  p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *
 * 
 * 思路：
 * 第一步：筛选无模式和有模式
   ([a-z.]\*)|([a-z]+(?=([a-z.]\*|$)

 第二步：模式匹配结果分类
 ['.*','a*','cdef']

 第三步：模式遍历与原始字符串匹配
 case1: .* 直接返回true
 case2: a*直接移动原始字符串光标（从0开始计数）
 case3: cdef 挨个匹配 如果不匹配直接返回false

示例：
 输入：
 s = "mississippi"
 p = "mis*is*p*."

 输出 false


 拆分分析:
 s = "mi  ss  i ss  ippi"
 p = "mi  s*  i s*  p*."

 ip和 p* 的未知不匹配 所以返回false

*/

export default (str, mode) => {
  let modeArr = mode.match(/([a-z.]\*)|([a-z]+(?=([a-z.]\*)|$))/g)
  let cur = 0 // 分割线
  let strLen = str.length
  for (let i = 0, len = modeArr.length, m; i < len; i++) {
    // 对于模式分为三类， .* | a* | cdef
    m = modeArr[i].split('')
    if (m[1] === '*') { // 如果模式的第二位是 * 表示是有模式的
      if (m[0] === '.') { //.* 不管是什么情况下出现都是匹配的
        cur = strLen
        break
      } else {
        while (str[cur] === m[0]) {
          cur++
        }
      }
    } else { //冲字符串的对比
      for (let j = 0, jl = m.length; j < jl; j++) {
        if(m[j]!==str[cur]) {
          return false
        } else {
          cur ++
        }
      }
    }

  }
  return cur === strLen  //如果长度一样，表示匹配到了结尾
}