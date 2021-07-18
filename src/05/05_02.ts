import {GovernmentBuildingType, HouseType} from "../02/02_2";

export const getStreetsTitlesOfGovermentsBuildings =
  (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map(b => b.address.street.title)
  }

export const getStreetsTitlesOfHouses =
  (houses: Array<HouseType>) => {
    return houses.map(h => h.address.street.title)
  }

export function createMessages(houses: Array<HouseType>) {
  let callbackfn = (h: HouseType) => `Hello guys from ${h.address.street.title}`;

  return houses.map(callbackfn)
}