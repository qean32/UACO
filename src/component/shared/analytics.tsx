'use client'

import { fakeGrapch } from '@/config';
import React from 'react';
import { CustomActiveShapePieChart } from '@/component/ui';
import { UnwrapList } from './unwrap-list';


interface Props {
}

const Analytics: React.FC<Props> = ({ }: Props) => {

    return (
        <div className='w-full flex max-h-[400px] gap-5 bg-gray-200 pt-15 px-15'>
            <div className='w-1/3 -translate-y-1/3'>
                <CustomActiveShapePieChart data={fakeGrapch} />
            </div>
            <div className='flex w-2/4 justify-around gap-5'>
                <UnwrapList title='Активные группы' />
                <UnwrapList title='Активные организаторы' className='w-2/3' />
            </div>
        </div>
    );
}

export default Analytics