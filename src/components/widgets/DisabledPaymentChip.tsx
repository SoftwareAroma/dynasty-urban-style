import React from 'react';

const DisabledPaymentChip = ({icon} : any) => {
    return (
        <React.Fragment>
            <div className="relative top-0">
                <div className="w-full h-full bg-white border border-gray-200 rounded-full px-8 py-1">
                    {icon}
                </div>
                <div className="absolute top-0 right-0 left-0 w-full h-full bg-gray-100 rounded-full bg-opacity-60"></div>
            </div>
        </React.Fragment>
    )
}

export default DisabledPaymentChip;

