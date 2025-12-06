'use client'

import { Button } from '@/components/ui/button';
import { cn } from "@/lib"
import React from 'react';


interface Props {
    event: { date: string, name: string }
    value: number
    index: number
}

export const AdminTableItem: React.FC<Props> = ({ event: { date, name }, value, index }: Props) => {

    return (
        <div className={cn("text-sm- font-medium grid py-3 pl-7", ((index % 2 == 0) ? 'bg-gray-200' : 'bg-gray-100'))} style={{ gridTemplateColumns: '9fr 1fr 1fr 1fr' }} >
            <p>{name}</p>
            <p className='pl-1'>{value}</p>
            <p>{date}</p>
            <Button size={'lg'} className='bg-red-700 hover:bg-red-600 mx-2 px-0 cursor-pointer'><p>Удалить</p></Button>
        </div>
    );
}