import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface State {
    displaySidebar: boolean
    displayDropdown: boolean
    displayModal: boolean
    sidebarView: string
    modalView: string
    userAvatar: string
}

const initialState = {
    displaySidebar: false,
    displayDropdown: false,
    displayModal: false,
    modalView: 'LOGIN_VIEW',
    sidebarView: 'CART_VIEW',
    userAvatar: '',
}

export type MODAL_VIEWS =
    | 'SIGNUP_VIEW'
    | 'LOGIN_VIEW'
    | 'FORGOT_VIEW'
    | 'NEW_SHIPPING_ADDRESS'
    | 'NEW_PAYMENT_METHOD'

export type SIDEBAR_VIEWS = 'CART_VIEW' | 'CHECKOUT_VIEW' | 'PAYMENT_METHOD_VIEW'

// create a ui slice
export const uiSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        // open sidebar
        openSidebar: (state) => {
            state.displaySidebar = true;
        },
        // close sidebar
        closeSidebar: (state) => {
            state.displaySidebar = false;
        },
        // open dropdown
        openDropdown: (state) => {
            state.displayDropdown = true;
        },
        // close dropdown
        closeDropdown: (state) => {
            state.displayDropdown = false;
        },
        // open modal
        openModal: (state) => {
            state.displayModal = true;
            state.displaySidebar = false;
        },
        // close modal
        closeModal: (state) => {
            state.displayModal = false;
        },
        // set modal view
        setModalView: (state, action: PayloadAction<MODAL_VIEWS>) => {
            state.modalView = action.payload;
        },
        // set sidebar view
        setSidebarView: (state, action: PayloadAction<SIDEBAR_VIEWS>) => {
            state.sidebarView = action.payload;
        },
        // set user avatar
        setUserAvatar: (state, action: PayloadAction<string>) => {
            state.userAvatar = action.payload;
        },

        // remove user avatar
        removeUserAvatar: (state) => {
            state.userAvatar = '';
        }
    },
});

// export actions
export const {
    closeModal,
    closeSidebar,
    closeDropdown,
    openModal,
    openDropdown,
    setModalView,
    setSidebarView,
    openSidebar,
    setUserAvatar,
    removeUserAvatar,
} = uiSlice.actions;

// selectors
export const selectDisplaySidebar = (state: State) => state.displaySidebar;
export const selectDisplayDropdown = (state: State) => state.displayDropdown;
export const selectDisplayModal = (state: State) => state.displayModal;
export const selectModalView = (state: State) => state.modalView;
export const selectSidebarView = (state: State) => state.sidebarView;
export const selectUserAvatar = (state: State) => state.userAvatar;

// dispatch actions
export const dispatchOpenSidebar = () => (dispatch: any) => {
    dispatch(openSidebar());
}

// dispatch actions
export const dispatchCloseSidebar = () => (dispatch: any) => {
    dispatch(closeSidebar());
}

// dispatch actions
export const dispatchOpenDropdown = () => (dispatch: any) => {
    dispatch(openDropdown());
}

// dispatch actions
export const dispatchCloseDropdown = () => (dispatch: any) => {
    dispatch(closeDropdown());
}

// dispatch actions
export const dispatchOpenModal = () => (dispatch: any) => {
    dispatch(openModal());
}

// dispatch actions
export const dispatchCloseModal = () => (dispatch: any) => {
    dispatch(closeModal());
}

// dispatch actions
export const dispatchSetModalView = (view: MODAL_VIEWS) => (dispatch: any) => {
    dispatch(setModalView(view));
}

// dispatch actions
export const dispatchSetSidebarView = (view: SIDEBAR_VIEWS) => (dispatch: any) => {
    dispatch(setSidebarView(view));
}

// dispatch actions
export const dispatchSetUserAvatar = (avatar: string) => (dispatch: any) => {
    dispatch(setUserAvatar(avatar));
}

// remove avatar
export const dispatchRemoveUserAvatar = () => (dispatch: any) => {
    dispatch(removeUserAvatar());
}

// export reducer
export default uiSlice.reducer;
