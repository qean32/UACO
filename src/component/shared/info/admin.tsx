'use client'

import { cn } from "@/lib/helpers"
import React from 'react';
import { InfoItem } from './info-item';


interface Props {
    className?: string
}

export const Admin: React.FC<Props> = ({ className }: Props) => {

    return (
        <div className={cn("flex h-fit flex-col rounded-md w-1/6 bg-gray-200 p-5", className)}>
            <p className='pb-5 text-lg font-bold'>Информация</p>
            <InfoItem title='ФИО' value='Адрей Евгеньевич Шарапин' />
            <InfoItem title='Отделение' value='Информационные сети' />
            <InfoItem title='Пол' value='Муж' />
            <InfoItem title='Дата рождения' value='20.06.2006' />
        </div>
    );
}