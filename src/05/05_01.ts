export type ManType = {
  name: string
  age: number
}

const people: Array<ManType> = [
  {name: 'Andrew Ivanov', age: 33},
  {name: 'Alexander Petrov', age: 24},
  {name: 'Dmitry Sidorov', age: 18}
]

const dimychTransformstor = (man: ManType) => ({
  stack: ['css, html', 'js', 'tdd', 'react'],
  firstName: man.name.split(' ')[0],
  lastName: man.name.split(' ')[1]
})


// массив hard code для примера
const devs1 = [
  {
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: 'Andrew', lastName: 'Ivanov'
  },
  {
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: 'Alexander', lastName: 'Petrov'
  },
  {
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: 'Dmitry', lastName: 'Sidorov'
  }
]

// массив people
const devs2 = [
  dimychTransformstor(people[0]),
  dimychTransformstor(people[1]),
  dimychTransformstor(people[2])
]

const devs3 = people.map(dimychTransformstor)

const devs4 = people.map(man => ({
  stack: ['css, html', 'js', 'tdd', 'react'],
  firstName: man.name.split(' ')[0],
  lastName: man.name.split(' ')[1]
}))

const messages = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`)

export const createGreetingMessage = (people: Array<ManType>) => {
  return people.map(man =>
    `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`)
}