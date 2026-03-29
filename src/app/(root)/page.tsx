'use server'

import { AboutFilter } from '@/component/shared';
import { GeneralTable } from '@/component/shared/table';
import { getGeneralTableAction } from '../actions';
import dynamic from 'next/dynamic';
import { GeneralTableUI } from '@/component/shared/button/pack';

const Analytics = dynamic(() => import("@/component/shared/analytics"));


export default async function Page({ searchParams }: any) {
    const queries = await searchParams
    const data = await getGeneralTableAction(queries)

    return (
        <div className='flex-1 flex flex-col'>
            <Analytics />
            <div className='w-full min-h-100 px-15 pt-10'>
                <div className="flex justify-between pb-7">
                    <div className="flex gap-5 items-center">
                        <p className='text-xl font-bold'>Выбранный фильтр</p>
                        <AboutFilter />
                    </div>
                    <GeneralTableUI />
                </div>
                <GeneralTable {...data} />
            </div>
        </div>
    );
}
