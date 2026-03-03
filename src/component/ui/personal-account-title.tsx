'use client'

import React from 'react';
import { useRouter } from 'next/navigation'
import { ArrowBack } from '.';


interface Props {
    title: string
}

export const PersonalAccountTitle: React.FC<Props> = ({ title }: Props) => {
    const router = useRouter()

    return (
        <div className='flex h-[200px] items-center justify-around'>
            <ArrowBack />
            <p className='w-full text-center text-4xl font-bold text-blue-600'>
                {title}
            </p>
        </div>
    );
}