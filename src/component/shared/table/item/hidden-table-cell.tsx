import { cn } from '@/lib/helpers'
import React from 'react'

interface Props {
    width: string
}


export const HiddentTableCall: React.FC<Props> = ({ width }: Props) => {
    return (
        <div className={cn('overflow-hidden', width)}>
            <div>

            </div>
        </div>
    )
}
