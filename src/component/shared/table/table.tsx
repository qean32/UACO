import React, { ReactNode } from 'react'
import { cn } from '@/lib/helpers'

interface Props {
    className?: string
    children: ReactNode
}


export const Table: React.FC<Props> = ({ className, children }: Props) => {
    return (
        <div className={cn('table-outer rounded-sm', className)}>
            <table className='mb-10 w-full border-collapse table overflow-hidden'>
                {children}
            </table>
        </div>
    )
}
