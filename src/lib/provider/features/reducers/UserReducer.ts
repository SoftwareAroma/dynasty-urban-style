import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// product type
export type Product = {
    id: string;
    name: string;
    description: string;
    price: any;
    images: any[];
    category: string;
    brand: string;
    rating: number;
    numReviews: number;
    numInStock: number;
    colours: string[];
    sizes: string[];
    createdAt: string;
    updatedAt: string;
}

// user type
export type User = {
    id: string;
    social: string;
    email: string;
    firstName: string;
    lastName: string;
    displayName: string;
    phone?: string;
    avatar?: string;
    roles?: string;
    isAdmin?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

// Define a type for the slice state
interface InitialState {
    user: User | any,
    wishList: Product[];
}

const initialState: InitialState = {
    user: null,
    wishList: [],
}

// create a user slice
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // set user
        setUser: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
        // remove user
        removeUser: (state) => {
            state.user = null;
        },
        // add item to wish list
        addToWishList: (state, action: PayloadAction<any>) => {
            state.wishList.push(action.payload);
        },
        // remove from wish list
        removeFromWishList: (state, action: PayloadAction<any>) => {
            state.wishList = state.wishList.filter((item) => item.id !== action.payload.id);
        }
    }
});

// export the actions
export const {setUser, removeUser, addToWishList, removeFromWishList} = userSlice.actions;

// select user
export const selectUser = (state: any) => state.user.user;

// dispatch the action to set user
export const setUserAction = (user: any) => (dispatch: any) => {
    dispatch(setUser(user));
}

// add item to wish list
export const addToWishListAction = (item: any) => (dispatch: any) => {
    dispatch(addToWishList(item));
}

// dispatch the action to remove user
export const removeUserAction = () => (dispatch: any) => {
    dispatch(removeUser());
}

// dispatch the action to remove item from wish list
export const removeFromWishListAction = (item: any) => (dispatch: any) => {
    dispatch(removeFromWishList(item));
}

// export the reducer
export default userSlice.reducer;
