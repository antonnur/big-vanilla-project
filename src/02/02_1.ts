export  type StreetType = {
  title: string
}

export type AddressType ={
  number: number
  street: StreetType
}

export type HouseType = {
  builderAt: number
  repaired: false
  address: AddressType
}

export type CityType = {
  title: string
  houses: Array<HouseType>
  governmentBuildings: Array<void>
  citizensNumber: number
}