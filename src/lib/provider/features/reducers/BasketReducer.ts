import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@provider/store';

export interface BasketState {
    items: any[];
    subTotal: number;
    totalPrice: number;
    currencyCode: string;
}

const initialState: BasketState = {
    items: [],
    subTotal: 0,
    totalPrice: 0,
    currencyCode: 'GHS',
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // reducer to add item to basket
        addItem: (state, action: PayloadAction<any>) => {
            state.items.push(action.payload);
        },
        // reducer to remove item from basket
        removeItem: (state, action: PayloadAction<any>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        // increase the number of items of a product
        increaseItem: (state, action: PayloadAction<any>) => {
            state.items = state.items.map(item => {
                if (item.id === action.payload.id) {
                    item.quantity += 1;
                }
                return item;
            });
        },
        // reduce the number of items of a product
        reduceItem: (state, action: PayloadAction<any>) => {
            state.items = state.items.map(item => {
                if (item.id === action.payload.id) {
                    // if the number is 1, remove the item from the basket
                    if (item.quantity === 1) {
                        return state.items.filter(item => item.id !== action.payload.id);
                    }else{
                        item.quantity -= 1;
                    }
                }
                return item;
            });
        },
        // get the subtotal of the basket
        getSubtotal: (state) => {
            state.subTotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        // get total
        getTotal: (state) => {
            state.totalPrice = state.subTotal;
        },
        // clear the basket
        clearBasket: (state) => {
            state.items = [];
            state.subTotal = 0;
        }
    },
});

export const { addItem, removeItem, increaseItem, reduceItem, getSubtotal, clearBasket, getTotal } = basketSlice.actions;

// get the number of items in the basket
export const selectBasketItemsCount = (state: RootState) => state.basket.items.length;
// get the subtotal of the basket
export const getBasketSubtotal = (state: RootState) => state.basket.subTotal;
// select the items in the basket
export const selectBasketItems = (state: RootState) => state.basket.items;

// get currency code
export const getCurrencyCode = (state: RootState) => state.basket.currencyCode;

// dispatch the action to add item to basket
export const addItemToBasket = (item: any) => (dispatch: any) => {
    dispatch(addItem(item));
    // calculate the subtotal
    dispatch(getSubtotal());
    // get the total
    dispatch(getTotal());
}

// dispatch the action to remove item from basket
export const removeItemFromBasket = (item: any) => (dispatch: any) => {
    dispatch(removeItem(item));
    // calculate the subtotal
    dispatch(getSubtotal());
    // get the total
    dispatch(getTotal());
}

// dispatch the action to increase the number of items of a product
export const increaseItemQuantity = (item: any) => (dispatch: any) => {
    dispatch(increaseItem(item));
    // calculate the subtotal
    dispatch(getSubtotal());
    // get the total
    dispatch(getTotal());
}

// dispatch the action to reduce the number of items of a product
export const reduceItemQuantity = (item: any) => (dispatch: any) => {
    dispatch(reduceItem(item));
    // calculate the subtotal
    dispatch(getSubtotal());
    // get the total
    dispatch(getTotal());
}

export default basketSlice.reducer;
