import React from 'react';

type Props = {
    number: number;
    active: boolean;
    onClick?: () => void;
}

const PagingIndicator = (props:Props) => {
    const { number, active, onClick } = props;
    return (
        <React.Fragment>
            <button onClick={onClick} className={`bg-transparent border ${active ? 'border-gray-700' : 'border-gray-200'} px-4 py-2 ${active ? 'text-gray-700' : 'text-gray-200'} hover:border-gray-500 hover:text-gray-500`}>
                {number}
            </button>
        </React.Fragment>
    )
}

export default PagingIndicator
