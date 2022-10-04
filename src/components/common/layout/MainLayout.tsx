import React from 'react';

// define prop types
type Props = {
    children: React.ReactNode;
}

const MainLayout = (props: Props) => {
    const {children} = props;
    return (
        <React.Fragment>
            <div className="header">
                <h1>Header</h1>
            </div>
            <div className="main-layout">
                {children}
            </div>
            <div className="footer">
                <h1>Footer</h1>
            </div>
        </React.Fragment>
    );
};

export default MainLayout;