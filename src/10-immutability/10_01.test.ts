import {makeHairstyle, UserType, UserWithLaptopType} from "./10_01";

test('reference type test', () => {
  let user: UserType = {
    name: 'Nina',
    hair: 32,
    address: {
      title: 'Minsk'
    }
  }

  const awesomeUser = makeHairstyle(user, 2)

  expect(user.hair).toBe(32)
  expect(awesomeUser.hair).toBe(16)
  expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
  let user: UserWithLaptopType = {
    name: 'Nina',
    hair: 32,
    address: {
      title: 'Minsk'
    },
    laptop: {
      title: 'Asus'
    }

  }

  const movedUser = moveUser(user, 'Kiev')

  expect(user).not.toBe(movedUser)
  expect(user.address).not.toBe(movedUser.address)
  expect(movedUser.address.title).toBe('Kiev')
