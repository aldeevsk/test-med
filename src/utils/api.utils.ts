import { categories } from '@/_mockdata/categories.data'
import { products } from '@/_mockdata/products.data'
import { productTypes } from '@/_mockdata/producttypes.data'

const data: any = {
    categories,
    products,
    productTypes
}

interface IGetOptions {
    table?: string | null
    id?: number | string
    category?: string | null
    slug?: string | null
}

function getByCategory<T>(category: string): T | void {
    const result = category ? data[category] || [] : null
    return result
}

export const api = {
    getBy<T>({ table = null }: IGetOptions): T | void {
        let result
        if (table) {
            result = getByCategory<T>(table)
        }
        return result
    }
}
