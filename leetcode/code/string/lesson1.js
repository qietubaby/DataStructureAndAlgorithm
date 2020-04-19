/*方法一*/
// export default (str) => {
//     return str.split(' ').map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }


/*方法二*/
// export default (str) => {
//     return str.split(/\s/g).map(item => {
//         return item.split('').reverse().join('')
//     }).join(' ')
// }

export default (str) => {
    return str.match(/[\w']+/g).map(item => {
         return item.split('').reverse().join('')
    }).join(' ')
}