import React from 'react';
import {MainLayout} from "@components/common/layout";
import { HeroSection } from '@components/ui/Hero';
import SelectedForYou from '@components/ui/SelectedForYou';
import ComplementaryContent from '@components/ui/ComplementaryContent';
import WhyChooseUsSection from '@components/ui/WhyChooseUsSection';
import SubscribeSection from '@components/ui/SubscribeSection';

const Home = () => {
    return (
        <React.Fragment>
            <HeroSection />
            <ComplementaryContent />
            <SelectedForYou 
                title='Selected just for you'
                isButton={true}
                centerTitle={false}
            />
            <WhyChooseUsSection />
            <SelectedForYou
                title='Products in today'
                isButton={false}
                centerTitle={true}
            />
            <SubscribeSection />
        </React.Fragment>
    );
}

Home.Layout = MainLayout;

export default Home
