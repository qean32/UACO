'use client'


import { Admin } from '@/components/shared/info';
import { AddEvent } from '@/components/shared/modals';
import { AdminTable } from '@/components/shared/tables';
import { PersonalAccountTitle } from '@/components/ui';
import { cn } from "@/lib/helpers"
import React from 'react';

interface Props {
    className?: string
}

export default function Page({ className }: Props) {

    return (
        <div className={cn('flex-1', className)}>
            <PersonalAccountTitle title='Кабинет администратора' />
            <div className="flex justify-center gap-7">
                <Admin />

                <div className="flex flex-col px-5 rounded-md w-3/4">
                    <div className='pb-6 flex justify-between'>
                        <p className='text-lg font-medium'>Мероприятия</p>
                        <AddEvent />
                    </div>
                    <AdminTable />
                </div>
            </div>
        </div>
    );
}