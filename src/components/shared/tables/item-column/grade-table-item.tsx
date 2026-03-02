'use client'

import { Input } from '@/src/components/ui';
import { GradeEvent } from '@/src/lib/generated/prisma/browser';
import { cn } from "@/src/lib/helpers"
import React from 'react';


interface Props extends GradeEvent {
    event: { date: string, name: string }
    value: number
    index: number
}

export const GradeTableItem: React.FC<Props> = ({ event: { name }, value, index }: Props) => {

    return (
        <div className={cn("text-sm- font-medium grid py-3 pl-7", ((index % 2 == 0) ? 'bg-gray-200' : 'bg-gray-100'))} style={{ gridTemplateColumns: '9fr 1fr 1fr 1fr' }} >
            <p>{name}</p>
            <p><Input type="text" className='w-[60px]' defaultValue={value} /></p>
            <p><Input type="text" className='w-[60px]' defaultValue={value} /></p>
            <p>7.1</p>
        </div>
    );
}