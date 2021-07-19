import {ManType} from "./destructuring";

let props: ManType

beforeEach(() => {
  props = {
    name: 'Anton',
    age: 33,
    lessons: [{title: '1'}, {title: '2'}],
    address: {
      street: {
        title: 'Siberia street'
      }
    }
  }
})

test('', () => {
  const {age, lessons} = props
  const {title} = props.address.street

  expect(age).toBe(33)
  expect(lessons.length).toBe(2)

  expect(title).toBe('Siberia street')
})