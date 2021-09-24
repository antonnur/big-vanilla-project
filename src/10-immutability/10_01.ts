export type UserType = {
  name: string
  hair: number
  address: {city: string, house?: number}
}

export type LaptopType = {
  title: string
}
export type UserWithLaptopType = UserType & {   // & - и
  laptop: LaptopType
}

export function makeHairstyle(u: UserType, power: number) {
  const copy = {
    ...u,
    hair: u.hair / power
  }
  // copy.hair = u.hair / power

  return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
  const copy = {
    ...u,
  }
    copy.address = {
    ...copy.address,
      city: city
  }

  return copy
}