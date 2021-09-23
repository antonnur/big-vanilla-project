export type UserType = {
  name: string
  hair: number
  address: {title: string}
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