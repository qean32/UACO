'use client'

import { cn } from "@/lib"
import React from 'react';


interface Props {
    className?: string
    children: string
    size?: 'text-sm' | 'text-xl' | '' | 'text-2xl'
    props?: any
    color?: 'text-blue-600' | 'text-black'
}

export const Title: React.FC<Props> = ({ className, children, size = 'text-xl', props, color = 'text-blue-600' }: Props) => {

    return (
        <p {...props} className={cn('font-bold cursor-pointer', className, size, color)}>{children}</p>
    );
}