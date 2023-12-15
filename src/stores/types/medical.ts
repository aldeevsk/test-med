import type { IEntity } from './models'

export enum ETakingMethods {
    PERORAL = 'peroral',
    INTRAVENOUSLY = 'intravenously',
    INTRAMUSCULARLY = 'intramuscularly'
}

export enum EGroups {
    PROGRAM = 'program',
    INJECTOR = 'injector',
    MEDICATION = 'medication'
}

export interface ICategory extends IEntity {
    group: EGroups
}

export interface IProductTypes extends IEntity {}

export interface IProduct extends IEntity {
    group: EGroups
    takingMethod: ETakingMethods
    dosage: number[]
    unit: string
    injectorSlug?: string
    categorySlug: string
}
