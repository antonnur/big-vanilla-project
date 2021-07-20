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

export const ManComponent: React.FC<PropsType> = ({title, man: {name}}) => {
  // const {name} = props.man //деструктуризация
  // const {title, man: {name}} = props   //можно передать сразу в параметры выше

  return (
    <div>
      <h2>{title}</h2>
      <hr/>
      <div>
        {name}
      </div>
    </div>
  )
}