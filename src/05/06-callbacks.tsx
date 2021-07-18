import React from "react";


export const User = () => {

  const deleteUser = () => {
    alert('User have been deleted')
  }

  const saveUser = () => {
    alert('User have been saved')
  }

  return (
    <div>
      Dimych
      <button onClick={deleteUser}>delete</button>
      <button onClick={saveUser}>save</button>
    </div>
  )
}