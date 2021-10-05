import {
  addNewBooksToUser,
  makeHairstyle, moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, upgradeUserLaptop,
  UserType, UserWithBooksType,
  UserWithLaptopType, WithCompaniesType
} from "./10_01";

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

test('upgrade laptop to MacBook', () => {
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

  const userCopy = upgradeUserLaptop(user, 'MacBook')

  expect(user).not.toBe(userCopy)
  expect(user.address).toBe(userCopy.address)
  expect(user.laptop).not.toBe(userCopy.laptop)
  expect(userCopy.laptop.title).toBe('MacBook')
  expect(user.laptop.title).toBe('Asus')
})

test('upgrade house to number', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Nina',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Asus'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = moveUserToOtherHouse(user, 22)

  expect(user).not.toBe(userCopy)
  expect(user.books).toBe(userCopy.books)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.address).not.toBe(userCopy.address)
  expect(userCopy.address.house).toBe(22)
})

test('add new book to user', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Nina',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Asus'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = addNewBooksToUser(user, 'ts')

  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[4]).toBe('ts')
  expect(user.books.length).toBe(4)
})

test('update js to ts', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Nina',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Asus'
    },
    books: ['css', 'html', 'js', 'react']
  }

  const userCopy = updateBook(user, 'js', 'ts')

  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[2]).toBe('ts')
  expect(user.books.length).toBe(4)
})

test('remove js book', () => {
  let user: UserWithLaptopType & UserWithBooksType = {
    name: 'Nina',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Asus'
    },
    books: ['css', 'html', 'js', 'react'],

  }

  const userCopy = removeBook(user, 'js')

  expect(user).not.toBe(userCopy)
  expect(user.laptop).toBe(userCopy.laptop)
  expect(user.books).not.toBe(userCopy.books)
  expect(userCopy.books[2]).toBe('react')
  expect(userCopy.books.length).toBe(3)
})

test('remove js book', () => {
  let user: UserWithLaptopType & WithCompaniesType = {
    name: 'Nina',
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Asus'
    },
    companies: [{id: 1, title: 'Епам'},{id: 2, title: 'IT-Incubator'}]
  }

  const userCopy = updateCompanyTitle(user, 1, 'EPAM') as UserWithLaptopType & WithCompaniesType

  expect(user).not.toBe(userCopy)
  expect(user.address).toBe(userCopy.address)
  expect(user.companies).not.toBe(userCopy.companies)
  expect(userCopy.companies[0].title).toBe('EPAM')
})