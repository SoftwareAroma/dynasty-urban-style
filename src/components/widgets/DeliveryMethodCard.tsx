import React from 'react'

type Props = {
    icon: any,
    price: string,
    description: string
    border?: string
    isSelected: boolean
}

const DeliveryMethodCard = (props:Props) => {
    const { icon, price, description, border, isSelected } = props
    return (
        <React.Fragment>
            <div className={`bg-white flex flex-col justify-center items-center rounded-3xl border ${isSelected ? "border-gold" :" border-gray-300" } space-y-4 px-4 py-6 cursor-pointer`}>
                {icon}
                <h1 className="font-bold text-gray-900 text-lg md:text-lg lg:text-xl">
                    {price}
                </h1>
                <p className="w-28 text-center md:text-lg lg:text-lg">
                    {description}
                </p>
            </div>
        </React.Fragment>
    )
}

export default DeliveryMethodCard;

