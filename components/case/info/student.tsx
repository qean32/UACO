'use client'

import { cn } from "@/lib"
import React from 'react';
import { InfoItem } from './info-item';


interface Props {
    className?: string
}

export const Student: React.FC<Props> = ({ className }: Props) => {

    return (
        <div className={cn("flex h-fit flex-col px-5 rounded-md w-1/6", className)}>
            <p className='pb-5 text-lg font-medium'></p>
            <InfoItem title='ФИО' value='Адрей Евгеньевич Шарапин' />
            <InfoItem title='Группа' value='22адс-2' />
            <InfoItem title='Отделение' value='Информационные сети' />
            <InfoItem title='Курс' value='3' />
            <InfoItem title='Пол' value='муж' />
            <InfoItem title='Дата рождения' value='20.06.2006' />
        </div>
    );
}