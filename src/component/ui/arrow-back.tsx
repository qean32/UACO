'use client'

import React from 'react'
import { cn } from '@/lib/helpers'
import { useRouter } from 'next/navigation'
import { ArrowBigLeft } from 'lucide-react'

interface Props {
    className?: string
}


export const ArrowBack: React.FC<Props> = ({ className }: Props) => {
    const router = useRouter()

    return (
        <div
            onClick={() => router.back()}
            className={cn(
                "rounded-2xl aspect-square cursor-pointer bg-gray-200 p-3 transition-all duration-300",
                className)}
        >
            <ArrowBigLeft stroke={'white'} fill={'white'} />
        </div>
    )
}
