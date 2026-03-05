'use client'

import React from 'react';
import { ArrowBack } from '.';


interface Props {
    title: string
}

export const PersonalAccountTitle: React.FC<Props> = ({ title }: Props) => {
    return (
        <div className='flex h-[200px] items-center justify-around px-15'>
            <ArrowBack />
            <p className='w-full text-center text-4xl font-bold'>
                {title}
            </p>
        </div>
    );
}