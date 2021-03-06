// 你现在是棒球比赛记录员。
// 给定一个字符串列表，每个字符串可以是以下四种类型之一：
// 1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。
// 2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
// 3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
// 4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。

// 每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
// 你需要返回你在所有回合中得分的总和。

// 示例 1:

// 输入: ["5", "2", "C", "D", "+"]
// 输出: 30
// 解释:
// 第1轮：你可以得到5分。总和是：5。
// 第2轮：你可以得到2分。总和是：7。
// 操作1：第2轮的数据无效。总和是：5。
// 第3轮：你可以得到10分（第2轮的数据已被删除）。总数是：15。
// 第4轮：你可以得到5 + 10 = 15分。总数是：30。

// https://leetcode-cn.com/problems/baseball-game/


// 栈（stack）又名堆栈，它是一种运算受限的线性表。
//限定仅在表尾进行插入和删除操作的线性表。这一端被称为栈顶，
//相对地，把另一端称为栈底。向一个栈插入新元素又称作进栈、入栈或压栈，
//它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；从一个栈删除
//元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素


export default (arr) => {
  let result = []

  //上一轮的数据
  let pre1

  let pre2

  arr.forEach(item => {
    switch (item) {
      case 'C':
        if (result.length) {
          result.pop()
        }
        break
      case 'D':
        pre1 = result.pop()
        // 上一轮已经通过pop拿出来了，所以还得给放回去，再把本轮的也加上
        result.push(pre1, pre1 * 2)
        break
      case '+':
        pre1 = result.pop()
        pre2 = result.pop()
        result.push(pre2, pre1, pre2 + pre1)
        break
      default:
        result.push(item * 1)

    }
  })

  return result.reduce((total, num) => { return total + num })
}

