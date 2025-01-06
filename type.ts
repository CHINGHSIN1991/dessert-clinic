export type ProductCategory = 'cookie' | 'b' | 'a'
export type TimeUnit = 'year' | 'month' | 'day'
export type ProductSpec = {
  item_id: string,
  spec_key: string,
  price: number,
  inventory: number,
  content: {
    name: string, 
    qty:number
  }[]
}

export interface product {
  id: string,
  enable: boolean,
  category: ProductCategory,
  name_key: string,
  description_key: string,
  preservation_key: string,
  ingredient_keys: string[],
  spec: ProductSpec[],
  production_date: {
    amount: number,
    unit: TimeUnit
  },
  cover_url: string,
  img_list: string[],
  tags: {
    label: string,
    color: string,
  }[]
}

export interface order {
  products: item[]
}