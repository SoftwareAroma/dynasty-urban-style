import React from 'react';

type Props = {
    size: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SizeButton = (props:Props) => {
    const { size, onClick } = props;
    return (
        <React.Fragment>
            <button onClick={onClick} className="border border-gray-200 text-gray-700 px-2 py-1 hover:border-gray-500 hover:text-gray-900 font-normal">
                {size}
            </button>
        </React.Fragment>
    )
}

export default SizeButton;
