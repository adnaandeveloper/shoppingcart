import { configureStore } from '@reduxjs/toolkit';
import CardtReducer from '../reduces/cart/CardtReducer';

export default configureStore({
  reducer: {
    counter: CardtReducer,
  },
});
