function increaseAge(u: UserType) {
  // u.age++
  u.age = u.age + 1
}

type UserType = {
  name: string
  age: number
  address: {title: string}
}

test('Reference type test', () => {

  let user: UserType = {
    name: 'User',
    age: 32,
    address: {
      title: 'New Ur'
    }
  }

  increaseAge(user)

  expect(user.age).toBe(33)
})

test('Array reference test', () => {

  let users = [
    {
      name: 'User1',
      age: 32
    },
    {
      name: 'User2',
      age: 20
    }
  ]

  let admins = users
  admins.push({name: 'User3', age: 10})

  expect(users[2]).toEqual({name: 'User3', age: 10})
})

test('Array reference test', () => {

  let usersCount = 100

  let adminsCount = usersCount

  // adminsCount++
  adminsCount = adminsCount = 1
})

test('Reference type test', () => {

  const address ={
    title: 'New Ur'
  }

  let user: UserType = {
    name: 'User',
    age: 32,
    address: address
  }

  // let addr = user.address

  let UserNew: UserType ={
    name: 'Natasha',
    age: 30,
    address: address
  }

  address.title = 'Ur City'

  expect(user.address).toBe(UserNew.address)
  expect(user.address.title).toBe('Ur City')
})

test('Reference type array test', () => {

  const address ={
    title: 'New Ur'
  }

  let user_1: UserType = {
    name: 'User',
    age: 32,
    address: address
  }

  let user_2: UserType ={
    name: 'Natasha',
    age: 30,
    address: address
  }

  const users = [user_1, user_2, {name: 'Katya', age: 18, address: address}]

  const admins = [user_1, user_2]

  admins[0].name = 'Tanya'

  expect(users[0].name).toBe('Tanya')
  expect(user_1.name).toBe('Tanya')
})
