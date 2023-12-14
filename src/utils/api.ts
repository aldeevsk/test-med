import { type IEntity } from '@/types/models'
import { medications } from '@/_mockdata/medications'
import { dialyzers } from '@/_mockdata/dialyzers'
import { concentrators } from '@/_mockdata/concentrators'

const data: any = {
  dialyzers,
  concentrators,
  medications,
}

interface IGetOptions {
  category?: string | null
  slug?: string | null
}

export const api = {
  getBy<T extends IEntity>({ category = null }: IGetOptions): T[] {
    const byCategory = category ? data[category] || [] : null
    return byCategory || null
  }
}
