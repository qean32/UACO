'use client'

import { fakeGroup, fakeSuperviser } from '@/config';
import React from 'react';
import { Title } from '../ui';
import { CustomActiveShapePieChart } from '@/component/ui';


interface Props {
}

export const MainUpperPart: React.FC<Props> = ({ }: Props) => {

    return (
        <div className='w-full flex max-h-[400px] gap-5 bg-gray-200 pt-15'>
            <div className='flex justify-center w-1/3 -translate-y-1/5'>
                <CustomActiveShapePieChart data={[
                    { name: '22ис-2', value: 4 },
                    { name: '25аэп-1', value: 3 },
                    { name: '24св-2', value: 3 },
                    { name: '23-тэп-1', value: 7 },
                    { name: '22п-2', value: 7 },
                ]} />
            </div>
            <div className='flex w-2/4 justify-around gap-5'>
                <div className='flex flex-col w-1/3'>
                    <Title size='text-2xl'>Список лучших групп</Title>
                    <ol className='pt-5'>
                        {fakeGroup.map((item, index) => {
                            return <div key={index} className='grid' style={{ gridTemplateColumns: '1fr 2fr' }}><Title size='' className='w-[100px]'>{item}</Title> <p>200 Баллов</p></div>
                        })}
                    </ol>
                </div>
                <div className='flex flex-col w-2/3'>
                    <Title size='text-2xl'>Список лучших организаторов</Title>
                    <ol className='pt-5'>
                        {fakeSuperviser.map((item, index) => {
                            return <div key={index} className='grid' style={{ gridTemplateColumns: '1fr 1fr' }}><Title size='' className='w-[300px]'>{item}</Title> <p>2 Мероприятия</p></div>
                        })}
                    </ol>
                </div>
            </div>
        </div>
    );
}