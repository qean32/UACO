'use server'

import { FilterEvent } from '@/component/shared/modal'
import { GeneralTable } from '@/component/shared/table';
import { Button } from '@/component/ui/button';
import React from 'react';

const Analytics = React.lazy(() => import("@/component/shared/analytics"))


export default async function Main() {
    return (
        <div className='flex-1 flex flex-col'>
            <Analytics />
            <div className='w-full min-h-[400px] px-15 pt-10'>
                <div className="flex justify-between pb-7">
                    <div className="flex gap-5 items-center">
                        <p className='text-xl font-bold'>Выбранный фильтр</p>
                        <Button><p>Список всех студентов за все время</p></Button>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FilterEvent />
                        <Button variant={'primary'}>Экспорт в Excel</Button>
                    </div>
                </div>
                <GeneralTable />
            </div>
        </div>
    );
}
