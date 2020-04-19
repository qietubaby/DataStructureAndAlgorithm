import words from '../../code/recur/lesson2'

test('words', () => {
 expect(words('FEABCCBAERRCAB',['A','B','C'])).toEqual([11,2,5])
})