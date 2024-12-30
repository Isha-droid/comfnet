import React from 'react'

type CardProps = {
    img: string;
    header: string;
    content: string;
};


const RightCard = ({ img, header, content }: CardProps) => {
    return (
        <div className="flex justify-center items-center gap-12 p-6 bg-white mx-auto">
            <div className="flex flex-col justify-start gap-4 max-w-xl">
                <h1 className="text-2xl font-medium text-black">{header}</h1>
                <p className="text-gray-600">{content}</p>
            </div>
            <img src={img} alt={header} className="w-[320px] h-80 rounded-md object-cover" />
        </div>
    )
}

export default RightCard
