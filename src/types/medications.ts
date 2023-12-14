import type { IEntity } from "./models"

export enum ETakingMethods {
  PERORAL = 'peroral',
  INTRAVENOUSLY = 'intravenously',
  INTRAMUSCULARLY = 'intramuscularly'
}

export interface ITakingMethod extends IEntity {
  slug: ETakingMethods
}

export interface IConentrator extends IEntity {
  volume: number
  unit: string
}

export interface IInjectors extends IEntity {
  volume: number
  unit: string
  injectType: string
}

export interface IMedication extends IEntity {
  takingMethod: ETakingMethods
  dosage: number[]
  unit: string
}
