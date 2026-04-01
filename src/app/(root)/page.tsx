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
            <div className='w-full min-h-100 px-5 pt-10 md:px-15 min-[320px]:px-5'>
                <div className="flex justify-between pb-7 md:flex-row min-[320px]:flex-col md:items-center">
                    <div className="flex min-[320px]:flex-col md:flex-row gap-5 md:items-center">
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
