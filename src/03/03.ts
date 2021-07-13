import {StudentType} from "../02/02";
import {GovernmentBuildingType, HouseType} from "../02/02_1";

export const sum = (a: number, b: number) => {
  return a + b
}

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill
  })
}

//переменную student тут можем назвать как угодно так как это ссылка
export function makeStudentActive(student: StudentType) {
  student.isActive = true
}

//s это ссылка на переменную student из файла 03.test
export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
  return s.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
  building.budget += budget
}

export const repairHouse = (house: HouseType) => {
  house.repaired = true
}

export const toFireStaff = (building: GovernmentBuildingType, staffCountToFire: number) => {
  building.staffCount -= staffCountToFire
}

export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
  building.staffCount += staffCountToHire
}