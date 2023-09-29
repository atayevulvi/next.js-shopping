import React from 'react'
import Image from 'next/image';

interface PropsType {
    img: string;
    title: string;
    desc: string;
}

function FeatureCard({ img, title, desc }: PropsType) {
    return (
        <div className='flex gap-8'>
            <Image
                className='w-auto h-[50px]'
                src={img}
                width={80}
                height={50}
                alt={title}
            />
            <div className="space-y-1">
                <h2 className='font-medium text-xl uppercase'>{title}</h2>
                <p className='text-gray-600 text-[14px]'>{desc}</p>
            </div>
        </div>
    )
}

export default FeatureCard
