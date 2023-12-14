import type { IInjectors } from "@/types/medications"
import type { IEntity } from "@/types/models"


export const needleTypes: IEntity[] = [
  { id: 1, slug: 'venous', label: 'Венозные' },
  { id: 2, slug: 'arterious', label: 'Артериальные' }
]

export const catheterTypes: IEntity[] = [
  { id: 1, slug: 'foley', label: 'Катетер Фолея' },
  { id: 2, slug: 'maleco', label: 'Катетер Малеко' },
  { id: 3, slug: 'peccer', label: 'Катетер Пеццера' },
  { id: 4, slug: 'timann', label: 'Катетер Тиманна' },
  { id: 5, slug: 'nelaton', label: 'Катетер Нелатона' }
]

export const injectors: IInjectors[] = [
  {
    id: 1,
    slug: 'needle-1',
    label: 'Игла размер 1',
    volume: 10,
    unit: 'мл',
    injectType: 'needle'
  },
  {
    id: 2,
    slug: 'needle-2',
    label: 'Игла размер 2',
    volume: 20,
    unit: 'мл',
    injectType: 'needle'
  },
  {
    id: 3,
    slug: 'catheter-1',
    label: 'Катетер 1',
    volume: 100,
    unit: 'мл',
    injectType: 'catheter'
  },
  {
    id: 4,
    slug: 'catheter-2',
    label: 'Катетер 2',
    volume: 150,
    unit: 'мл',
    injectType: 'catheter'
  },
  {
    id: 5,
    slug: 'catheter-3',
    label: 'Катетер 3',
    volume: 200,
    unit: 'мл',
    injectType: 'catheter'
  }
]