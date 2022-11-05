import React from 'react';
import {MainHeader} from "@components/common/Header";
import MainFooter from "@components/common/Footer/MainFooter";
import {useAppSelector} from "@provider";

// define prop types
type Props = {
    children: React.ReactNode;
}

const MainLayout = (props: Props) => {
    const {children} = props;
    const theme = useAppSelector(state => state.theme.theme);
    // adding skeletons to the pages
    return (
        <React.Fragment>
            <div className={theme ? "dark": ""}>
                <div className="w-full">
                    <div className="header">
                        <MainHeader />
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-900 mx-auto">
                    {children}
                </div>
                <div className="footer">
                    <MainFooter />
                </div>
            </div>
        </React.Fragment>
    );
};

export default MainLayout;
