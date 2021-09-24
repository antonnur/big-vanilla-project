import {makeHairstyle, moveUser, UserType, UserWithLaptopType} from "./10_01";

test('reference type test', () => {
  let user: UserType = {
    name: 'Nina',
    hair: 32,
    address: {
      city: 'Minsk'
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
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Asus'
    }

  }

  const movedUser = moveUser(user, 'Kiev')

  expect(user).not.toBe(movedUser)
  expect(user.address).not.toBe(movedUser.address)
  expect(user.laptop).toBe(movedUser.laptop)
  expect(movedUser.address.city).toBe('Kiev')
})