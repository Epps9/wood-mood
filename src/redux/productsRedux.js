
import {initialState} from './initialState';

/* selectors */
export const getAll = ({products}) => products.watches;
export const getOneWatch = ({products}, id) => {
  const chosenProduct = products.watches.filter(item => item.id == id);
  //console.log('coto jest id', chosenProduct);
  return chosenProduct;
}
export const getOneBracelet = ({products}, id) => {
  const chosenProduct = products.bracelets.filter(item => item.id == id);
  //console.log('coto jest id bracelet', chosenProduct);
  return chosenProduct;
}
export const getOnePromo = ({products}, id) => products.promoProducts.filter(item => item.id == id);

export const findProductAmount = ({cart}, id) => { 
    const product = cart.find(item => item.id === id);
    const productAmount = product.amount;
    return productAmount
};


/* action name creator */
const reducerName = 'watches';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_WATCH = createActionName('ADD_WATCH');
const ADD_BRACELET = createActionName('ADD_BRACELET');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const CHANGE_AMOUNT = createActionName('CHANGE_AMOUNT');


/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const addWatchToCart = payload => ({payload, type: ADD_WATCH});
export const addBraceletToCart = payload => ({payload, type: ADD_BRACELET});

export const changeProductAmount = payload => ({payload, type: CHANGE_AMOUNT});
export const removeProduct = payload => ({payload, type: REMOVE_PRODUCT});

/* thunk creators */

/* reducer */
export const reducer = (cart = [], action = {}) => {
  switch (action.type) {
    case ADD_WATCH: 
      const watchId = parseInt(action.payload.id);

      console.log('action.payload.amount', action.payload.amount);

      const inCart = cart.find(item => item.id === watchId)



      const newWatch = () => {
        if(!inCart){
          const singleWatch = initialState.products.watches.find(item => 
            item.id === watchId);
          singleWatch.amount = action.payload.amount;
          console.log('singleWatch1', singleWatch);
          return singleWatch

        } else {
          const singleWatch = cart.find(item => item.id === watchId)
          console.log('singleWatch2', singleWatch);
          singleWatch.amount = singleWatch.amount + action.payload.amount;
          console.log('singleWatch.amount', singleWatch.amount);
          console.log('adding', singleWatch.amount + action.payload.amount);
          return singleWatch
        }
      }

      

      localStorage.setItem('cart', JSON.stringify(               [
        ...cart,
        {...newWatch(), amount: action.payload.amount},
      ],
        ));

      return [
        ...cart,
        {...newWatch()},
      ];

      case ADD_BRACELET: 
      const braceletId = parseInt(action.payload.id);

      const bracelet = initialState.products.bracelets.find(item => item.id === braceletId);

      return [
        ...cart,
        {...bracelet, amount: action.payload.amount}
      ];

      case REMOVE_PRODUCT: 

      const id = parseInt(action.payload)

      cart = cart.filter(item => item.id !== id);
      return [
        ...cart
      ];
      case CHANGE_AMOUNT: 
      const prodId = parseInt(action.payload.id);

      const newStatePart = cart.map(item => {
        if(item.id===prodId){
        item.amount = action.payload.amount
        return item
        } else {
        return item;
        }
      });

      localStorage.setItem('cart', JSON.stringify({newStatePart}));

      return [
        ...newStatePart,
      ];
    default:
      return cart;
  }
};
