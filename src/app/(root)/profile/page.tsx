'use server'


import { Student } from '@/component/shared/info';
import { PersonalAccountTitle } from '@/component/ui';
import { PickPeriod } from '@/component/shared/pick';
import React from 'react';
import { StudentTable } from '@/component/shared/table';

interface Props {
}

export default async function Page({ }: Props) {

    return (
        <div className='flex-1'>
            <PersonalAccountTitle title='Личная карточка студента' />

            <div className="flex justify-center gap-7">
                <Student />
                <div className="flex flex-col px-5 rounded-md w-3/4">
                    <p className='text-lg font-medium'>Мероприятия</p>
                    <div className='flex gap-4 py-4'>
                        <p className='font-medium'>Период</p>
                        <PickPeriod />
                    </div>
                    <StudentTable />
                </div>
            </div>
        </div>
    );
}