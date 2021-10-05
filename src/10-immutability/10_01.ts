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
export type WithCompaniesType = {
  companies: { id: number, title: string }[]
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

  /*const copy = {
      ...u,
      address: {
        ...u.address,
        city: city
  }
  return copy*/
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
  /* аналогичная запись
  const copy = {
    ...u,
    books: [...u.books]
  }
  copy.books.push(newBooks) //добовляем в массив
  return copy*/
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => ({
  ...u,
  books: u.books.map(b => b === oldBook ? newBook : b)
})
/*const copy = {
  ...u,
  books: u.books.map(b => b === oldBook ? newBook : b)
}
return copy*/

export const removeBook = (u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) => ({
  ...u,
  books: u.books.filter(b => b !== bookForDelete)
})

export const updateCompanyTitle = (u: WithCompaniesType,
                                   companyId: number,
                                   newTitle: string) => ({
  ...u,
  companies: u.companies.map(c => c.id === companyId ? {...c, title: newTitle} : c)
})
/*const copy :WithCompaniesType = {
  ...u,
  companies: u.companies.map(c => {
    if (c.id === companyId) {
      return {...c, title: newTitle}
    } else return c
  })
}
return copy*/
