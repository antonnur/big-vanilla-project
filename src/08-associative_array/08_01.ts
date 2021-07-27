let userOne = {
  name: 'Dmitri',
  age: 12,
  address: {
    city: {
      title: 'Msk'
    }
  }
}

export const userObj = {
  '0': 'Dmitri',
  '1': 'Natasha',
  '2': 'Valera',
  '3': 'Katya'
}

type UsersType ={
  [key:string]: {id: number, name: string}
}

export let userTwo: UsersType = {
  '12': {id: 12, name: 'Dmitri'},
  '32': {id: 32, name: 'Natasha'},
  '43': {id: 43, name: 'Valera'},
  '4': {id: 4, name: 'Katya'}
}

// userTwo[1]
let user = {id: 100, name: 'Igor'}
userTwo[user.id] = user
delete userTwo[user.id]
userTwo[user.id].name = 'Victor'

export const usersArray = [
  {id: 12, name: 'Dmitri'},
  {id: 32, name: 'Natasha'},
  {id: 43, name: 'Valera'},
  {id: 4, name: 'Katya'}
]

// usersArray.findIndex()
// usersArray.find(u => u.id ===1)
// usersArray.push(user)
// let userCopy = [...userArray.filter(), user]
// let usersArray = usersArray.filter(u => u.id !== user.id)