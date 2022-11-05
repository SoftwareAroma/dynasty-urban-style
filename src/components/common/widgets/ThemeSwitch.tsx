import React from 'react';
import {useAppSelector} from "@provider";
import {useDispatch} from "react-redux";
import {toggleTheme} from "@provider/features/reducers/ThemeReducer";
import { Moon, Sun } from '@components/icons';

const ThemeSwitch = () => {

    const theme = useAppSelector(state => state.theme.theme);

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <div onClick={() => dispatch(toggleTheme())} className="cursor-pointer">
                {
                    theme ? 
                    <Sun 
                        className="w-6 h-6 text-gray-500 dark:text-gray-300"
                    /> : 
                    <Moon
                        className="w-6 h-6 text-gray-500 dark:text-gray-300"
                    />
                }
            </div>
        </React.Fragment>
    )
}

export default ThemeSwitch;
