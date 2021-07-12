import {CityType} from "./02_1";

let city: CityType

beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
        builderAt: 2012, repaired: false,
        address: {number: 100, street: {title: 'White street'}}
      },
      {
        builderAt: 2008, repaired: false,
        address: {number: 100, street: {title: 'Happy street'}}
      },
      {
        builderAt: 2020, repaired: false,
        address: {number: 101, street: {title: 'Happy street'}}
      }],
    governmentBuildings: [],
    citizensNumber: 1000000
  }
})

// 01. создайте тип CityType
// 02. заполните объект city, чтобы тесты ниже прошли
test('test city should contains 3 houses', () => {
  expect(city.houses.length).toBe(3)

  expect(city.houses[0].builderAt).toBe(2012)
  expect(city.houses[0].repaired).toBe(false)
  expect(city.houses[0].address.number).toBe(100)
  expect(city.houses[0].address.street.title).toBe('White street')

  expect(city.houses[1].builderAt).toBe(2008)
  expect(city.houses[1].repaired).toBe(false)
  expect(city.houses[1].address.number).toBe(100)
  expect(city.houses[1].address.street.title).toBe('Happy street')

  expect(city.houses[2].builderAt).toBe(2020)
  expect(city.houses[2].repaired).toBe(false)
  expect(city.houses[2].address.number).toBe(101)
  expect(city.houses[2].address.street.title).toBe('Happy street')

})

// 01. заполните объект city, чтобы тесты ниже прошли
// 02. дополните тип GovernmentBuildingType
test.skip('test city should contains 3 houses', () => {
  expect(city.governmentBuildings.length).toBe(2)

  expect(city.governmentBuildings[0].type).toBe(2012)
  expect(city.governmentBuildings[0].budget).toBe(false)
  expect(city.governmentBuildings[0].address.number).toBe(100)
  expect(city.governmentBuildings[0].address.street.title).toBe('White street')

  expect(city.governmentBuildings[1].builderAt).toBe(2012)
  expect(city.governmentBuildings[1].repaired).toBe(false)
  expect(city.governmentBuildings[1].address.number).toBe(100)
  expect(city.governmentBuildings[1].address.street.title).toBe('White street')
})