import { MainLayout } from '@components/common/layout';
import SelectedForYou from '@components/ui/SelectedForYou';
import SubscribeSection from '@components/ui/SubscribeSection';
import React from 'react';

const Product = () => {
    return (
        <React.Fragment>
            <div className="pt-28"></div>

            <div className="">
                hello wrold
            </div>
            
            <SelectedForYou 
                title='Selected just for you'
                isButton={true}
                centerTitle={false}
            />
            <SubscribeSection />
        </React.Fragment>
    );
}

Product.Layout = MainLayout;

export default Product
