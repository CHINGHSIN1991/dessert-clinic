const commonItems = [{
  label_string: 'member-cart',
  url: '/member/cart',
}]

const getMemberItems = (isLoggedIn: boolean) => {
  if (isLoggedIn) {
    return [
      {
        label_string: 'member-detail',
        url: '/member/detail'
      },
      {
        label_string: 'member-order',
        url: '/member/orders',
      },
      ...commonItems
    ]
  }
  return [
    {
      label_string: 'member-login-signup',
      url: '/member/login',
    },
    ...commonItems
  ]
}

export const useMenu = () => {
  const getSectionList = (isLoggedIn: boolean) => [
    {
      title_string: 'section-product-introduction',
      url: '/products',
      items: [
        {
          label_string: 'product-category-cream-cake',
          url: '/products/cream-cake',
        }, {
          label_string: 'product-category-basque',
          url: '/products/basque',
        }, {
          label_string: 'product-category-cookie',
          url: '/products/cookie',
        }
      ]
    }, {
      title_string: 'section-about',
      url: '/about',
      items: [
        {
          label_string: 'about-brand',
          url: '/about/brand',
        }, {
          label_string: 'about-faq',
          url: '/about/faq',
        }, {
          label_string: 'about-contact',
          url: '/about/contact',
        }
      ]
    }, {
      title_string: 'section-event',
      url: '/event',
      items: [
        {
          label_string: 'event-group-buying',
          url: '/event/group-buying',
        }, {
          label_string: 'event-event',
          url: '/event/event',
        }, {
          label_string: 'event-news',
          url: '/event/news',
        }
      ]
    }, {
      title_string: 'section-member',
      url: '/member',
      items: getMemberItems(isLoggedIn)
    }
  ]

  return {
    getSectionList
  }
}