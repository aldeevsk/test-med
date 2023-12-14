import { ETakingMethods, type IMedication } from '@/types/medications'

export const medications: IMedication[] = [
  {
    id: 1,
    slug: 'medication-1',
    label: 'Препарат 1',
    takingMethod: ETakingMethods.PERORAL,
    dosage: [100, 200],
    unit: 'гр'
  },
  {
    id: 2,
    slug: 'medication-2',
    label: 'Препарат 2',
    takingMethod: ETakingMethods.INTRAVENOUSLY,
    dosage: [100, 200],
    unit: 'мл'
  }
]