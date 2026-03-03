'use server'

import { MainUpperPart } from '@/components/shared';
import { FilterEvent } from '@/components/shared/modal'
import { CustomButton } from '@/components/ui';
import { Button } from '@/components/ui/button';
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
            <MainUpperPart />
            <div className='w-full min-h-[400px] px-15'>
                <div className="flex justify-between pb-7">
                    <div className="flex gap-5 items-center">
                        <p className='text-2xl'>Выбранный фильтр</p>
                        <Button className='h-[40px]'><p>Список всех студентов за все время</p></Button>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FilterEvent />
                        <CustomButton className=''><p>Экспорт в Exel</p></CustomButton>
                    </div>
                </div>
                <div className="">
                    {/* <FEventStudentTable
                        events={await prisma.event.findMany({ take: 20 })}
                        // @ts-ignore
                        students={await GET_FEventStudent({})}
                    /> */}
                </div>
            </div>
        </div>
    );
}