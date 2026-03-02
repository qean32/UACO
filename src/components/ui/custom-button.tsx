'use client'

import { cn } from "@/src/lib/helpers"
import React from 'react';
import { Button } from './button';


interface Props {
    className?: string
    children: React.ReactNode
    props?: any
}

export const CustomButton: React.FC<Props> = ({ className = 'w-full', children, props }: Props) => {

    return (
        <Button asChild className={cn('cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-sm', className)} size={'lg'} {...props}>{children}</Button>
    );
}