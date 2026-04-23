'use client'

import { cn } from "@/lib/helpers"
import { ComponentProps, ReactNode } from 'react';


interface Props {
    className?: string
    children: string | ReactNode
    size?: 'text-sm' | 'text-xl' | 'text-2xl' | 'text-md'
    props?: ComponentProps<"p">
    color?: string
}

export const Title: React.FC<Props> = ({ className, children, size = 'text-xl', props, color = 'primary-color' }: Props) => {

    return (
        <p {...props} className={cn('font-bold cursor-pointer transition-colors duration-300', className, size, color)}>{children}</p>
    );
}
