import { configureStore } from '@reduxjs/toolkit';
import products from './reducers/products';
import users from './reducers/users';

export const store = configureStore({
    reducer: {
        products: products,
        users: users,
    }
});
