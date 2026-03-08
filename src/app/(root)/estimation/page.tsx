'use server'


import { EstimationTable } from '@/component/shared/table';
import React from 'react';

interface Props {
    className?: string
}

export default async function Main({ }: Props) {


    return (
        <div className='flex-1 px-15 pt-15'>
            <div className='w-full min-h-[400px]'>
                <EstimationTable />
            </div>
        </div>
    );
}