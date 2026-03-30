'use client'

import React from 'react'
import { cn } from '@/lib/helpers'
import { useRouter } from 'next/navigation'
import { ArrowBigLeft } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux'

interface Props {
    className?: string
}


export const ArrowBack: React.FC<Props> = ({ className }: Props) => {
    const { } = useAppSelector(state => state.action)
    const router = useRouter()

    return (
        <div onClick={() => router.back()}
            className={cn("rounded-xl aspect-square cursor-pointer bg-gray-200 hover:opacity-80 p-3 transition-all duration-300", className)}>
            <ArrowBigLeft stroke={'white'} fill={'white'} />
        </div>
    )
}
