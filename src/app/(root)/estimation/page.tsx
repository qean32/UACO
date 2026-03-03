'use server'


import { EstimationEventTable } from '@/component/shared/table';
import { cn } from "@/lib/helpers"
import React from 'react';

interface Props {
    className?: string
}

export default async function Main({ className }: Props) {


    return (
        <div className={cn('flex-1 px-15 pt-15', className)}>
            <div className='w-full min-h-[400px]'>
                <EstimationEventTable />
            </div>
        </div>
    );
}