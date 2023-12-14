// export interface IModel {
//   id: number
//   slug: string
//   label: string
// }

// export interface IModels {
//     [key: string]: {
//         info: IModel
//         items: IModel[]
//     }
// }

export interface IEntity {
  id: number
  slug: string
  label: string
  [key: string]: unknown
}

export interface IEntities {
    [key: string]: IEntity
}

export interface IModalData {
  [key: string]: {
    info: IEntity
    items: IEntity[]
  }
}
