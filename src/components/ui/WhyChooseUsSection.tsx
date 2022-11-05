import React from 'react';
import { WhyChooseUsItem } from '@components/widgets';
import { DeliveryTruck, GuaranteeShieldIcon, MaterialsIcon, PaymentIcon } from '@assets/static/icons';

const WhyChooseUsSection = () => {
    return (
        <div>
            <div className="flex flex-col justify-between items-center py-24 px-8">
                <h1 className='text-black font-bold text-lg md:text-2xl lg:text-3xl'>
                    Why choose us?
                </h1>
                <div className="mt-10 mb-10"></div>
                <div className="grid grid-cols-1 md:flex justify-between items-center space-x-4 px-8 py-4">
                    <WhyChooseUsItem 
                        icon={DeliveryTruck}
                        title="Fast Delivery"
                        description='All purchases over $199 are eligible for free shipping provided the customer is in range.'
                    />
                    <WhyChooseUsItem 
                        icon={PaymentIcon}
                        title="Easy Payment"
                        description='All payments are processed instantly over a secure payment protocol.'
                    />
                    <WhyChooseUsItem 
                        icon={GuaranteeShieldIcon}
                        isBlack={true}
                        title="Money-Back Guarantee"
                        description="If an item arrived damaged or you've changed your mind, you can send it back for a full refund.."
                    />
                    <WhyChooseUsItem
                        icon={MaterialsIcon}
                        isBlack={true}
                        title="Finest Quality"
                        description='Designed to last, each of our products has been crafted with the finest materials.'
                    />
                </div>
            </div>
        </div>
    );
}

export default WhyChooseUsSection;

