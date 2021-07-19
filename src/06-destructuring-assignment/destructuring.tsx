import React from "react";

type LessonType = {
  title: string
}

export type ManType = {
  name: string
  age: number
  lessons: Array<LessonType>
  address: {
    street: {
      title: string
    }
  }
}


type PropsType = {
  title: string
  man: ManType
}

export const ManComponent: React.FC<PropsType> = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <hr/>
      <div>
        {props.man.name}
      </div>
    </div>
  )
}