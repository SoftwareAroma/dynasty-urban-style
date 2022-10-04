import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import {basketReducer, userReducer, uiReducer, themeReducer} from "@provider/features";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        user: userReducer,
        ui: uiReducer,
        theme: themeReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
