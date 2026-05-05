import type { Product } from '@/model/product.model'
import axios from 'axios'

export class ProductRest {
  getAll(params: Record<string, unknown>): Promise<{ data: { data: Product[] } }> {
    const url = '/products'
    return axios.get<{ data: { data: Product[] } }>(url, { params }).then((res) => res.data)
  }
}
