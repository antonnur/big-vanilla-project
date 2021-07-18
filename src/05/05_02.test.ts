import {CityType} from "../02/02_2";
import {createMessages, getStreetsTitlesOfGovermentsBuildings, getStreetsTitlesOfHouses} from "./05_02";

let city: CityType

beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
        id: 1, builderAt: 2012, repaired: false,
        address: {
          number: 100,
          street: {title: 'White street'}
        }
      },
      {
        id: 2, builderAt: 2008, repaired: false,
        address: {
          number: 100,
          street: {title: 'Happy street'}
        }
      },
      {
        id: 3, builderAt: 2020, repaired: false,
        address: {
          number: 101,
          street: {title: 'Happy street'}
        }
      }],
    governmentBuildings: [
      {
        type: 'HOSPITAL', budget: 200000, staffCount: 200,
        address: {
          street: {
            title: 'Central Str'
          }
        }
      },
      {
        type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
        address: {
          street: {
            title: 'South Str'
          }
        }
      }
    ],
    citizensNumber: 1000000
  }
})

//01. создайте в том же файле еще одну функцию, чтобы тесты прошли
test('List of streets titles of government buildings', () => {
  let streetsNames = getStreetsTitlesOfGovermentsBuildings(city.governmentBuildings)

  expect(streetsNames.length).toBe(2)
  expect(streetsNames[0]).toBe('Central Str')
  expect(streetsNames[1]).toBe('South Str')
})

//01. создайте в том же файле еще одну функцию, чтобы тесты прошли
test('List of streets titles', () => {
  let streets = getStreetsTitlesOfHouses(city.houses)

  expect(streets.length).toBe(3)
  expect(streets[0]).toBe('White street')
  expect(streets[1]).toBe('Happy street')
  expect(streets[2]).toBe('Happy street')
})

test('Create greeting messages for streets', () => {
  let messages = createMessages(city.houses)

  expect(messages.length).toBe(3)
  expect(messages[0]).toBe('Hello guys from White street')
  expect(messages[1]).toBe('Hello guys from Happy street')
  expect(messages[2]).toBe('Hello guys from Happy street')
})

