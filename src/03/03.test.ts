import {StudentType} from "../02/02";
import {addSkill} from "./03";

let student: StudentType
beforeEach(() => {
  student = {
    id: 1,
    name: 'New',
    age: 30,
    isActive: false,
    address: {
      streetTitle: 'Sibirskaya 2',
      city: {
        title: 'Moskow',
        countryTitle: 'Russia'
      }
    },
    technologies: [
      {
        id: 1,
        title: 'HTML'
      },
      {
        id: 2,
        title: 'CSS'
      },
      {
        id: 3,
        title: 'React'
      }
    ]
  }
})

test('new tech skill should be added to student', () => {
  addSkill(student, 'JS')
})