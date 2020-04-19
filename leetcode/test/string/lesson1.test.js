import revertByWorld from '../../code/string/lesson1'

test('revertByWorld:abc efg', () => {
    expect(revertByWorld("abc efg")).toBe("cba gfe")
})