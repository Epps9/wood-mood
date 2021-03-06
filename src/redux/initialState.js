export const initialState = {
  cart: [],
  
  watches: [
    {
      _id: 1, 
      title: 'Wooden watch – walnut', 
      image: 'https://cdn.shopify.com/s/files/1/0059/8143/8023/products/woodwatchformen-giftforhim-groomsmenwatches_530x@2x.jpg', 
      price: '15$'
    },
    { 
      _id: 2, 
      title: 'Wooden watch – pecan', 
      image: 'https://manufakturadobrowolscy.pl/784-large_default/wooden-watch-walnut.jpg', 
      price: '25$'
    }, 
    { 
      _id: 3, 
      title: 'Wooden watch – peanut', 
      image: 'https://www.adelexpress.com/wp-content/uploads/2019/04/DODO-DEER-Luxury-Zebra-Wooden-Watches-Men-Gift-Quartz-Wood-Watch-Black-erkek-kol-saati-Drop.jpg', 
      price: '55$'
    }, 
    { 
      _id: 4, 
      title: 'Wooden watch – chestnut', 
      image: 'https://i2.wp.com/oldyouth.co.uk/wp-content/uploads/2020/04/Untitled-design-1.jpg', 
      price:  '45$'
    }, 
    { 
      _id: 5, 
      title: 'Wooden watch – hazelnut', 
      image: 'https://ae01.alicdn.com/kf/HTB17_EHPVXXXXcoXpXXq6xXFXXXg/Naturaleza-de-Madera-del-Juego-de-Tronos-Lobo-Banda-de-Cuero-Mujeres-Relojes-Creativos-De-Bamb.jpg_640x640.jpg', price:  '35$'
    }, 
    { 
      _id: 6, 
      title: 'Wooden watch – oak', 
      image: 'https://ae01.alicdn.com/kf/Had8ad938c5184d3d99aa79529c471a7eA.jpg', 
      price: '40$'
    }, 
    { 
      _id: 7, 
      title: 'Wooden watch – pine', 
      image: 'https://tmzegarki.pl/wp-content/uploads/2018/11/2520-45aa2b-510x510.jpeg', 
      price: '30$'
    }, 
    { 
      _id: 8, 
      title: 'Wooden watch – willow', 
      image: 'https://image.ceneostatic.pl/data/products/95355245/i-imitation-wood-watch-men-women-quartz-imitate-wooden-ostrich-deer-man-wristwatch-soft-leather-band-male-wrist-clock-reloj.jpg', 
      price: '20$'
    }
  ],
    bracelets: [
      {
        _id: 1, 
        title: 'Freya', 
        image: 'https://i.etsystatic.com/5667620/r/il/45b1c9/1543210026/il_794xN.1543210026_nbac.jpg', 
        price: '5',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
      { 
        _id: 2, 
        title: 'Classic', 
        image: 'https://5.imimg.com/data5/SK/MO/MY-3026346/leather-mens-bracelets-500x500.jpg', 
        price: '10',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      }, 
      { 
        _id: 3, 
        title: 'Noya', 
        image: 'https://images-na.ssl-images-amazon.com/images/I/71VMZ2RKLXL._SL1500_.jpg', 
        price: '12',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      }, 
      { 
        _id: 4, 
        title: 'Oriental', 
        image: 'https://cdn.shopify.com/s/files/1/1464/1370/products/bracelet24x1024.jpg', 
        price:  '20',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      }, 
      { 
        _id: 5, 
        title: 'Leaf', 
        image: 'https://i.pinimg.com/originals/98/44/ec/9844ec091e703f40406f9fbb90fb3808.jpg', 
        price: '16',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      }, 
      { 
        _id: 6, 
        title: 'Ancient', 
        image: 'https://www.ross-simons.com/dw/image/v2/BCFL_PRD/on/demandware.static/-/Sites-lbh-master/default/dwcee869cf/images/jewelry-bracelets/908729.jpg', 
        price: '40',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      }, 
      { 
        _id: 7, 
        title: 'Ivory', 
        image: 'https://www.madebygotland.com/wp-content/uploads/2018/06/Stripe-leather-bracelet-for-men.jpg', 
        price: '30',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      }, 
      { 
        _id: 8, 
        title: 'Rock', 
        image: 'https://images-na.ssl-images-amazon.com/images/I/61hOQ6WQz%2BL._UX500_.jpg', 
        price: '20',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      }

    ],
    promoProducts: [
      { 
        _id: 1, 
        title: 'Walnut',
        image: 'https://ae01.alicdn.com/kf/Had8ad938c5184d3d99aa79529c471a7eA.jpg', 
        price: '40',
        newPrice: '20',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      }, 
      { 
        _id: 2, 
        title: 'Pine',
        image: 'https://tmzegarki.pl/wp-content/uploads/2018/11/2520-45aa2b-510x510.jpeg', 
        price: '30',
        newPrice: '15',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      }, 
      { 
        _id: 3, 
        title: 'Oak',
        image: 'https://image.ceneostatic.pl/data/products/95355245/i-imitation-wood-watch-men-women-quartz-imitate-wooden-ostrich-deer-man-wristwatch-soft-leather-band-male-wrist-clock-reloj.jpg', 
        price: '20',
        newPrice: '10',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
      { 
        _id: 4, 
        title: 'Indian',
        image: 'https://i.etsystatic.com/5667620/r/il/45b1c9/1543210026/il_794xN.1543210026_nbac.jpg', 
        price: '40',
        newPrice: '20',
      }, 
      { 
        _id: 5, 
        title: 'Worrior',
        image: 'https://5.imimg.com/data5/SK/MO/MY-3026346/leather-mens-bracelets-500x500.jpg', 
        price: '30',
        newPrice: '15',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      }, 
      { 
        _id: 6, 
        title: 'Hippie',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71VMZ2RKLXL._SL1500_.jpg', 
        price: '20',
        newPrice: '10',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      },
    ],
};
