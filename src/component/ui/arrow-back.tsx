'use client'

import React from 'react'
import { cn } from '@/lib/helpers'
import { useRouter } from 'next/navigation'
import { ArrowBigLeft } from 'lucide-react'
import { Color } from '@/config'

interface Props {
    className?: string
}


export const ArrowBack: React.FC<Props> = ({ className }: Props) => {
    const router = useRouter()

    return (
        <div
            onClick={() => router.back()}
            className={cn(
                "rounded-full aspect-square cursor-pointer bg-gray-300 p-3 hover:-translate-x-0.5 transition-all duration-300",
                className)}
        >
            <ArrowBigLeft stroke={'white'} />
        </div>
    )
}
