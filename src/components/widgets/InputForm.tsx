import React from 'react';

type Props = {
    name: string;
    value: string;
    label: string;
    placeholder: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = (props:Props) => {
    const { value, onChange, placeholder, type, name, label } = props;
    return (
        <React.Fragment>
            <div className="w-full space-y-1">
                <label className='font-bold text-gray-600 capitalize' htmlFor={name}>{label}</label>
                <input 
                    name={name}
                    type={type ? type : "text" }
                    value={value}
                    onChange={onChange}
                    className="rounded-full px-4 outline-none focus:outline-none w-full py-2 border border-gray-300"
                    placeholder={placeholder} 
                />
            </div>
        </React.Fragment>
    )
}

export default InputForm
