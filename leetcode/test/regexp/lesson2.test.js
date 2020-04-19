import regModeStr from '../../code/regexp/lesson2'
test('regModeStr', ()=> {
  expect(regModeStr('aaa','caa*')).toBe(false)
})
