import React from 'react';
import {MainHeader} from "@components/common/Header";
import MainFooter from "@components/common/Footer/MainFooter";
import {useAppSelector} from "@provider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

// define prop types
type Props = {
    children: React.ReactNode;
}

const MainLayout = (props: Props) => {
    const { children } = props;
    const theme = useAppSelector(state => state.theme.theme);
    return (
        <React.Fragment>
            <QueryClientProvider client={queryClient}>
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

                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </React.Fragment>
    );
};

export default MainLayout;
