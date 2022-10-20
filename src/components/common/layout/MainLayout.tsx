import React from 'react';
import {MainHeader} from "@components/common/Header";
import MainFooter from "@components/common/Footer/MainFooter";
import {useAppSelector} from "@provider";
import {HeroSection} from "@components/ui/Hero";

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
                <div className="">
                    <div className="header sticky top-0">
                        <MainHeader />
                    </div>
                    <HeroSection />
                </div>
                <div className="main-layout">
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
