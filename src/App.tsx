import React from 'react';
import './App.css';

function App() {

  const names = ['Dimych', 'Sveta', 'Katya', 'Viktor', 'Ignat']
  const liElements = names.map(n => <li>{n}</li>)

  const users = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Katya'},
    {id: 4, name: 'Viktor'},
    {id: 5, name: 'Ignat'}
  ]

  const liElementsUsers = users.map((u) => <li key={u.id}>{u.name}</li>)

  return (
    <div className="App">
      <ul>
        {liElements}
      </ul>
      <ul>
        {liElementsUsers}
      </ul>
    </div>
  );
}

export default App;
