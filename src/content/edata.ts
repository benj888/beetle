export enum CategoryEnum {
  /** 國外成蟲 */
  ForeignAdult = 1,
  /** 國內成蟲 */
  DomesticAdult = 2,
  /** 國外幼蟲 */
  ForeignLarva = 3,
  /** 國內幼蟲 */
  DomesticLarva = 4,
  /** 標本 */
  Specimen = 5,
}

export const CategoryList = [
    {
      id: CategoryEnum.ForeignAdult,
      name: "國外成蟲",
      url: "/categoryItem/foreignAdult",
      seq: 2,
    },
    {
      id: CategoryEnum.DomesticAdult,
      name: "國內成蟲",
      url: "/categoryItem/domesticAdult",
      seq: 1,
    },
    {
      id: CategoryEnum.ForeignLarva,
      name: "國外幼蟲",
      url: "/categoryItem/foreignLarva",
      seq: 4,
    },
    {
      id: CategoryEnum.DomesticLarva,
      name: "國內幼蟲",
      url: "/categoryItem/domesticLarva",
      seq: 3,
    },
    {
      id: CategoryEnum.Specimen,
      name: "標本",
      url: "/categoryItem/specimen",
      seq: 5,
    },
  ];