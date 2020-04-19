import flower from '../../code/array/lesson3'
test('flower', () => {
  expect(flower([0,0,0,0,1,1,0,0,0,1],3)).toBe(true)
})