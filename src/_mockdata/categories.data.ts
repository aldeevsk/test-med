import type { ICategory } from '@/stores/types/medical'
import { EGroups, ETakingMethods } from '@/stores/types/medical'

export const categories: ICategory[] = [
    {
        id: 1,
        slug: 'hd',
        label: 'HD',
        group: EGroups.PROGRAM,
        takingMethod: ETakingMethods.INTRAMUSCULARLY
    },
    {
        id: 2,
        slug: 'hdf',
        label: 'HDF',
        group: EGroups.PROGRAM,
        takingMethod: ETakingMethods.INTRAMUSCULARLY
    },
    {
        id: 3,
        slug: 'uf',
        label: 'UF',
        group: EGroups.PROGRAM,
        takingMethod: ETakingMethods.INTRAMUSCULARLY
    },
    {
        id: 4,
        slug: 'needle',
        label: 'Игла',
        group: EGroups.INJECTOR,
        takingMethod: ETakingMethods.INTRAMUSCULARLY
    },
    {
        id: 5,
        slug: 'catheter',
        label: 'Катетер',
        group: EGroups.INJECTOR,
        takingMethod: ETakingMethods.INTRAMUSCULARLY
    },
    {
        id: 6,
        slug: 'dialyzer',
        label: 'Диализатор',
        group: EGroups.INJECTOR,
        takingMethod: ETakingMethods.INTRAVENOUSLY
    },
    {
        id: 7,
        slug: 'concentrator',
        label: 'Концентратор',
        group: EGroups.INJECTOR,
        takingMethod: ETakingMethods.INTRAVENOUSLY
    },
    {
        id: 8,
        slug: 'bicarbonate',
        label: 'Бикарбонат',
        group: EGroups.INJECTOR,
        takingMethod: ETakingMethods.INTRAVENOUSLY
    },
    {
        id: 9,
        slug: 'anticoagulant',
        label: 'Антикоагулянт',
        group: EGroups.INJECTOR,
        takingMethod: ETakingMethods.INTRAVENOUSLY
    },
    {
        id: 10,
        slug: 'medication',
        label: 'Препараты',
        group: EGroups.MEDICATION,
        takingMethod: ETakingMethods
    }
]
