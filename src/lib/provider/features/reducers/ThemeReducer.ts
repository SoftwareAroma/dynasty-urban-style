import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Define a type for the slice state
interface ThemeState {
    theme: boolean;
}

// Define the initial state using that type
const initialState: ThemeState = {
    theme: false,
}

export const themeSlice = createSlice({
    name: 'theme',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setTheme: (state, action: PayloadAction<boolean>) => {
            state.theme = action.payload;
        },
        // set to false for light theme
        setLightTheme: (state) => {
            state.theme = false;
        },
        // set to true for dark theme
        setDarkTheme: (state) => {
            state.theme = true;
        }
    }
});

export const {setTheme, setLightTheme, setDarkTheme} = themeSlice.actions;

// select theme
export const selectTheme = (state: any) => state.theme.theme;

// dispatch the action to set theme
export const setThemeAction = (theme: boolean) => (dispatch: any) => {
    dispatch(setTheme(theme));
}

// dispatch the action to set light theme
export const setLightThemeAction = () => (dispatch: any) => {
    dispatch(setLightTheme());
}

// dispatch the action to set dark theme
export const setDarkThemeAction = () => (dispatch: any) => {
    dispatch(setDarkTheme());
}

export default themeSlice.reducer;
