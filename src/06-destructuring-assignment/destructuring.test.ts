import {ManType} from "./destructuring";

let props: ManType

beforeEach(() => {
  props = {
    name: 'Anton',
    age: 33,
    lessons: [{title: '1'}, {title: '2'}, {title: '3', name: 'react'}],
    address: {
      street: {
        title: 'Siberia street'
      }
    }
  }
})

test('Testing one', () => {
  const {age, lessons} = props
  const {title} = props.address.street

  expect(age).toBe(33)
  expect(lessons.length).toBe(2)

  expect(title).toBe('Siberia street')
})

test('Testing two', () => {
  const l1 = props.lessons[0]
  const l2 = props.lessons[1]

  //деструктурирование массива
  /*const [ls1, ls2] = props.lessons*/

  //достаем остаточные объекты массива после ls1
  /*const [ls1, ...restLessons] = props.lessons*/

  //если нужен только третий элемент, добавляем запятые (с момощью запятых пропускаем объекты)
  /*const [,,ls2] =props.lessons*/

  /* expect(ls1.title).toBe('1')
   expect(ls2.title).toBe('2')*/

  const [, ls2, ...restLesson] = props.lessons

  expect(l1.title).toBe('1')
  expect(l2.title).toBe('2')

  expect(restLesson.length).toBe(1)
  expect(restLesson[0].title).toBe('3')
  expect(restLesson[0].name).toBe('react')

  expect(restLesson[0]).toStrictEqual({name: 'react', title: '3'})  //можем менять местами порядок
})
