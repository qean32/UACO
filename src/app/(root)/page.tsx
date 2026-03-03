'use server'

import { Analytics } from '@/component/shared';
import { FilterEvent } from '@/component/shared/modal'
import { CustomButton } from '@/component/ui';
import { Button } from '@/component/ui/button';
import { cn } from "@/lib/helpers"
import React from 'react';
import { GET_FEventStudent } from '@/app/actions';
import { prisma } from '@root/prisma/prisma';


interface Props {
    className?: string
}

export default async function Main({ className }: Props) {
    return (
        <div className={cn('flex-1 gap-15 flex flex-col', className)}>
            <Analytics />
            <div className='w-full min-h-[400px] px-15'>
                <div className="flex justify-between pb-7">
                    <div className="flex gap-5 items-center">
                        <p className='text-xl font-bold'>Выбранный фильтр</p>
                        <Button><p>Список всех студентов за все время</p></Button>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FilterEvent />
                        <Button variant={'primary'}>Экспорт в Exel</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}