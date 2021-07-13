type LocalCityType = {
  title: string
  countryTitle: string
}

type AddressType = {
  streetTitle: string
  city: LocalCityType
}

type TechType = {
  id: number
  title:string
}

export type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: AddressType
  technologies: Array<TechType>
}


const student: StudentType = {
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
};

console.log(student.age)
console.log(student.name)
console.log(student.address.city.title)
console.log(student.technologies[1].title)