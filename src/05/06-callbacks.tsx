import React from "react";


export const User = () => {

  const deleteUser = () => {
    alert('User have been deleted')
  }

  const saveUser = () => {
    alert('User have been saved')
  }

  const onNameChanged = () => {
    console.log('Name changed')
  }
  const focusLostHandler = () => {
    console.log('Focus lost')
  }

  return (
    <div>
      <textarea
        onChange={onNameChanged}
        onBlur={focusLostHandler}>
          Dimych
      </textarea>
      <div>
        <input/>
      </div>
      <button onClick={deleteUser}>delete</button>
      <button onClick={saveUser}>save</button>
    </div>
  )
}