'use client'

import { cn } from "@/lib/helpers"
import React from 'react';


interface Props {
    className?: string
    title: string
    value: string
}

export const InfoItem: React.FC<Props> = ({ className, title, value }: Props) => {

    return (
        <div className={cn('pb-4', className)}>
            <p className='font-bold text-sm'>{title}</p>
            <p className='font-medium text-sm'>{value}</p>
        </div>
    );
}