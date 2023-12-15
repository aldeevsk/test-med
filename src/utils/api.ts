import { medications } from '@/_mockdata/medications'
import { dialyzers } from '@/_mockdata/dialyzers'
import { concentrators } from '@/_mockdata/concentrators'

const data: any = {
    dialyzers,
    concentrators,
    medications
}

interface IGetOptions {
    id?: number | string
    category?: string | null
    slug?: string | null
}

function getByCategory<T>(category: string): T | void {
    const result = category ? data[category] || [] : null
    return result
}

export const api = {
    getBy<T>({ category = null }: IGetOptions): T | void {
        let result
        if (category) {
            result = getByCategory<T>(category)
        }
        return result
    }
}
