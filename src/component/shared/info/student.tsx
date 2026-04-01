'use client'


import React from 'react';
import { InfoItem } from './info-item';
import { formatDate } from '@/lib/helpers';
import { convertRu } from '@/config';
import { userInfo } from '@/@types';
import { SignOut } from '../button';

export const Student: React.FC<userInfo> = ({ dateOfBirth, firstName, lastName, sex, sureName, GroupCode, Group }: userInfo) => {

    return (
        <div className="flex flex-col rounded-md bg-gray-100 p-5 md:min-w-70 md:mr-10 h-fit">
            <p className='pb-5 text-lg font-bold'>Информация</p>
            <InfoItem title='ФИО' value={`${firstName} ${lastName} ${sureName}`} />
            <InfoItem title='Группа' value={GroupCode?.toString() ?? "Организатор"} />
            <InfoItem title='Отделение' value={`${Group?.Department?.code} ${Group?.Department?.name}`} />
            <InfoItem title='Семестр' value={Group?.semester?.toString() ?? ""} />
            <InfoItem title='Пол' value={convertRu[sex]} />
            <InfoItem title='Дата рождения' value={formatDate(dateOfBirth)} />
            <SignOut />
        </div>
    );
}
