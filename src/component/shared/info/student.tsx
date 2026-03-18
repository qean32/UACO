'use client'


import React from 'react';
import { InfoItem } from './info-item';
import { SignOut } from "..";
import { formatDate } from '@/lib/helpers';
import { convertRu } from '@/config';
import { userInfo } from '@/@types';

export const Student: React.FC<userInfo> = ({ dateOfBirth, firstName, lastName, sex, sureName, GroupCode, Group }: userInfo) => {

    return (
        <div className="flex h-fit flex-col rounded-md w-1/6 bg-gray-100 p-5">
            <p className='pb-5 text-lg font-bold'>Информация</p>
            <InfoItem title='ФИО' value={`${firstName} ${lastName} ${sureName}`} />
            <InfoItem title='Группа' value={GroupCode?.toString() ?? ""} />
            <InfoItem title='Отделение' value={`${Group.Department.code} ${Group.Department.name}`} />
            <InfoItem title='Семестр' value={Group.semester?.toString() ?? ""} />
            <InfoItem title='Пол' value={convertRu[sex]} />
            <InfoItem title='Дата рождения' value={formatDate(dateOfBirth)} />
            <SignOut />
        </div>
    );
}
