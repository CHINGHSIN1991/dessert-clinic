export const languageList = [
  {
    label: 'TW',
    name: 'Chinese',
    value: 'zh-TW',
  }, {
    label: 'US',
    name: 'English',
    value: 'en-US',
  }
]

export const mockProduct = {
  id: 'product_id',
  category: 'cookie',
  name_key: 'product_key',
  description_key: 'description_key',
  preservation_key: 'preservation_key',
  ingredient_keys: ['aaa', 'bbb'],
  spec: [
    {
      spec_key: 'xl',
      price: 255,
      content: [{
        name: 'aaa',
        qty: 23,
      }, {
        name: 'aaa',
        qty: 23,
      }]
    }, {
      spec_key: 'l',
      price: 200,
      content: [{
        name: 'aaa',
        qty: 15,
      }]
    }, {
      spec_key: 'm',
      price: 120,
      content: [{
        name: 'aaa',
        qty: 8,
      }]
    }
  ],
  production_date: {
    amount: 2,
    unit: 'day'
  },
  cover_url: 'cover_url',
  img_list: ['url1', 'url2', 'url3'],
  tags: [{
    label: 'mock_label1',
    color: 'mock_color1'
  }, {
    label: 'mock_label2',
    color: 'mock_color2'
  }]
}