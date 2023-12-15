import type { IProduct } from '@/stores/types/medical'
import { EGroups, ETakingMethods } from '@/stores/types/medical'

export const products: IProduct[] = [
    {
        id: 1,
        slug: 'medication-1',
        label: 'Препарат 1',
        takingMethod: ETakingMethods.PERORAL,
        dosage: [100, 200],
        unit: 'гр',
        group: EGroups.MEDICATION,
        categorySlug: 'medication'
    },
    {
        id: 2,
        slug: 'needle_1',
        label: 'Игла 1',
        takingMethod: ETakingMethods.INTRAVENOUSLY,
        dosage: [100, 200],
        unit: 'мл',
        group: EGroups.INJECTOR,
        categorySlug: 'needle'
    },
    {
        id: 3,
        slug: 'dialyzer_1',
        label: 'Диализатор 1',
        takingMethod: ETakingMethods.INTRAVENOUSLY,
        dosage: [100, 200],
        unit: 'мл',
        group: EGroups.INJECTOR,
        categorySlug: 'dialyzer'
    },
    {
        id: 4,
        slug: 'concentrator_1',
        label: 'Концентратор 1',
        takingMethod: ETakingMethods.INTRAVENOUSLY,
        dosage: [100, 200],
        unit: 'мл',
        group: EGroups.INJECTOR,
        categorySlug: 'concentrator'
    },
    {
        id: 5,
        slug: 'catheter_1',
        label: 'Катетер 1',
        takingMethod: ETakingMethods.INTRAVENOUSLY,
        dosage: [100, 200],
        unit: 'мл',
        group: EGroups.INJECTOR,
        categorySlug: 'catheter'
    },
    {
        id: 6,
        slug: 'bicarbonate_1',
        label: 'Бикарбонат 1',
        takingMethod: ETakingMethods.INTRAVENOUSLY,
        dosage: [100, 200],
        unit: 'мл',
        group: EGroups.INJECTOR,
        categorySlug: 'bicarbonate'
    },
    {
        id: 7,
        slug: 'anticoagulant_1',
        label: 'Антикоагулянт 1',
        takingMethod: ETakingMethods.INTRAVENOUSLY,
        dosage: [100, 200],
        unit: 'мл',
        group: EGroups.INJECTOR,
        categorySlug: 'anticoagulant'
    }
]
