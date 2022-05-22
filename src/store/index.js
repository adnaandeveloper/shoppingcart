import create from 'zustand';
import { produce } from 'immer';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const useStore = create((set) => ({
    /* 
    products: same as mock
    [
      {
        name: string
        price: number
        url: string
        id: string -- unique
      }
    ]
  */
    products: [],
    /* {
    id:  {
          name: string
          price: number
          url: string
          id: string -- unique
        }
  } */
    productsMap: {},
    /* 
    {
      [id]: quantity
    }
  */
    cart: {},
    /* functions */
    initialize: (products) => {
        set({
            products,
            productsMap: products.reduce(
                (acc, product) => ({ ...acc, [product.id]: product }),
                {}
            ),
        });
    },
    decrementProduct: (id) => {
        /*
        Todo:
        1. Put the id in the cart.
      */
        set(
            produce((draft) => {
                if (draft.cart[id] > 1) draft.cart[id]--;
                else delete draft.cart[id];
            })
        );
    },
    incrementProduct: (id) => {
        /*
        Todo:
        1. Put the id in the cart.
      */
        set(
            produce((draft) => {
                if (draft.cart[id]) draft.cart[id]++;
                else draft.cart[id] = 1;
            })
        );
    },
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useStore);
}

/* 
  const state = {
    products: [
        {
            name: 'Milk',
            id: '1',
            url: 'awdas',
            price: 100,
        },
    ],
    cart: {
      1: 1
    }
};

*/
