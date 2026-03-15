'use server'


import { Information } from '@/component/shared/info';
import { UserTable } from '@/component/shared/table';
import { PersonalAccountTitle } from '@/component/ui';
import React from 'react';

export default async function Page({ params }: any) {
    const { id } = await params

    return (
        <div className='flex-1 px-15'>
            <PersonalAccountTitle id={id} />
            <div className="flex justify-between">
                <Information id={id} />
                <UserTable id={id} />
            </div>
        </div>
    );
}
