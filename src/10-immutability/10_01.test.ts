import {UserType} from "./10_01";

function hairdresser(u: UserType, power: number) {
  const copy = {...u}

  copy.hair = u.hair / power

  return copy
}

test('reference type test', () => {
  let user: UserType = {
    name: 'Dimych',
    hair: 32,
    address: {
      title: 'Minsk'
    }
  }

  hairdresser(user, 2)

  expect(user.hair).toBe(16)
})