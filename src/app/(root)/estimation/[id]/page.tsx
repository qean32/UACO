'use server'


import { EstimationTable } from '@/component/shared/table';
import React from 'react';
import { getEstimationTableAction } from '../actions';

export default async function Page({ params }: { params: any }) {
    const { id } = await params
    const data = await getEstimationTableAction({ page: 0, userId: id })

    return (
        <div className='flex-1 px-15 pt-15'>
            <div className='w-full min-h-[400px]'>
                <EstimationTable {...data} id={id} />
            </div>
        </div>
    );
}
