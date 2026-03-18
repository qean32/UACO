'use server'


import { QueryDrop } from '@/component/shared';
import { CreateEvent } from '@/component/shared/modal';
import { SupervisorTable } from '@/component/shared/table';

export default async function Page() {

    return (
        <div className='flex-1 px-15'>
            <div className="flex justify-between">
                <div className="flex flex-col px-5 rounded-md w-full ml-5">
                    <div className='pb-6 flex justify-between'>
                        <p className='text-lg font-medium'>Мероприятия</p>
                        <div className="flex gap-2">
                            <QueryDrop />
                            <CreateEvent />
                        </div>
                    </div>
                    <SupervisorTable />
                </div>
            </div>
        </div>
    );
}
