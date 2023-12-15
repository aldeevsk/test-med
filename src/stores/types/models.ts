export interface IEntity {
    id: number
    slug: string
    label: string
    [key: string]: any
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
