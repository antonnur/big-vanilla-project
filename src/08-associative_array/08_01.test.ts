

beforeEach(()=>{

})

test('Should select corresponding user from obj', ()=>{
  expect(usersObj[0]).toBe('Dmitri')
  expect(usersObj[1]).toBe('Natasha')
  expect(usersObj[2]).toBe('Valera')
  expect(usersObj[3]).toBe('Katya')
})