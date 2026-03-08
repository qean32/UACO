'use server'


import { Admin } from '@/component/shared/info';
import { PushEvent } from '@/component/shared/modal';
import { SupervisorTable } from '@/component/shared/table';
import { PersonalAccountTitle } from '@/component/ui';
import React from 'react';

interface Props {
    className?: string
}

export default async function Page({ }: Props) {

    return (
        <div className='flex-1'>
            <PersonalAccountTitle title='Кабинет организатора' />
            <div className="flex justify-center gap-7">
                <Admin />

                <div className="flex flex-col px-5 rounded-md w-3/4">
                    <div className='pb-6 flex justify-between'>
                        <p className='text-lg font-medium'>Мероприятия</p>
                        <PushEvent />
                    </div>
                    <SupervisorTable />
                </div>
            </div>
        </div>
    );
}