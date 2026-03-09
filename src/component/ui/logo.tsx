import React from 'react'
import { cn } from '@/lib/helpers'

interface Props {
    className?: string
}


export const Logo: React.FC<Props> = ({ className }: Props) => {
    return (
        <img className={cn('w-20', className)} src='/logo.svg' />
    )
}
