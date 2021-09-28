export type UserType = {
  name: string
  hair: number
  address: { city: string, house?: number }
}

export type LaptopType = {
  title: string
}
export type UserWithLaptopType = UserType & {   // & - и
  laptop: LaptopType
}

export type UserWithBooksType = UserType & {   // & - и
  books: string[]
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
  return {
    ...u,
    address: {
      ...u.address,
      city: city
    }
  }

  /*  copy.address = {
    ...copy.address,
      city: city
  }*/
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
  return {
    ...u,
    address: {
      ...u.address,
      house: house
    }
  }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
  return {
    ...u,
    laptop: {
      ...u.laptop,
      title: laptop
    }
  }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
  return {
    ...u,
    books: [...u.books, newBook]
  }
  //const copy = {
  //  ...u,
  //  books: [...u.books]
  // }
  //copy.books.push(newBooks)
  //return copy
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, newBook: string) {
  return {
    ...u,
    books: [...u.books, newBook]
  }
}