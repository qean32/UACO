'use client'


import { Student } from '@/components/shared/info';
import { PersonalAccountTitle } from '@/components/ui';
import { PickPeriod } from '@/components/shared/pick';
import { cn } from "@/lib/helpers"
import React from 'react';

interface Props {
    className?: string
}

export default function Page({ className }: Props) {

    return (
        <div className={cn('flex-1', className)}>
            <PersonalAccountTitle title='Личная карточка студента' />

            <div className="flex justify-center gap-7">
                <Student />
                <div className="flex flex-col px-5 rounded-md w-3/4">
                    <p className='text-lg font-medium'>Мероприятия</p>
                    <div className='flex gap-4 py-4'>
                        <p className='font-medium'>Период</p>
                        <PickPeriod />
                    </div>
                    {/* <EventStudentTable /> */}
                </div>
            </div>
        </div>
    );
}