type UsersType = {
  [key: string]: { id: number, name: string }
}

let userTwo: UsersType

beforeEach(() => {
  userTwo = {
    '12': {id: 12, name: 'Dmitri'},
    '32': {id: 32, name: 'Natasha'},
    '43': {id: 43, name: 'Valera'},
    '4': {id: 4, name: 'Katya'}
  }
})

test('Should update corresponding user', () => {
  userTwo['4'].name = 'Dmitri'
  expect(userTwo['4'].name).toBe('Dmitri')
  expect(userTwo['4']).toEqual({id: 4, name: 'Dmitri'})
})

test('Should delete corresponding user', () => {
  delete userTwo['4']

  expect(userTwo['4']).toBeUndefined()
})