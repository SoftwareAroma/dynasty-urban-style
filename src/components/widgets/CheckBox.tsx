import React from 'react';

type Props = {
    id: string;
    label: string;
    name: string;
    quantity?: number;
    value?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    active?: boolean;
}

const CheckBox = (props:Props) => {
    const { label, name, id, quantity, value, onChange, active } = props;
    return (
        <React.Fragment>
            <div className="flex justify-start items-center space-x-4">
                <input 
                    type="checkbox" 
                    name={name}
                    id={id}
                    value={value}
                    onChange={onChange}
                    checked={active ? true : false}
                    className='w-4 h-4 text-black'
                />
                <label className='font-bold space-x-2' htmlFor={name}>
                    <span>{label}</span>
                    {
                        quantity &&
                        <span className='text-gray-300 font-normal'>
                            <span>(</span>
                            <span>{quantity}</span>
                            <span>)</span>
                        </span>
                    }
                </label>
            </div>
        </React.Fragment>
    )
}

export default CheckBox;
