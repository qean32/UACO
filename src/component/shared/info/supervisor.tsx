'use client'


import React from 'react';
import { InfoItem } from './info-item';
import { User } from "@root/prisma/generated/prisma/browser";
import { convertRu } from '@/config';
import { GroupType } from '@/@types';
import { formatDate } from '@/lib/helpers';
import { SignOut } from '../button';


interface Props extends Pick<User, "firstName" | "lastName" | "sureName" | "sex" | "dateOfBirth"> {
    Group: GroupType
}

export const Supervisor: React.FC<Props> = ({ dateOfBirth, firstName, lastName, sex, sureName, Group }: Props) => {

    return (
        <div className="flex flex-col rounded-md bg-gray-100 p-5 md:min-w-70 md:mr-10 h-fit">
            <p className='pb-5 text-lg font-bold'>Информация</p>
            <InfoItem title='ФИО' value={`${firstName} ${lastName} ${sureName}`} />
            <InfoItem title='Отделение' value={`${Group?.Department?.code} ${Group?.Department?.name}`} />
            <InfoItem title='Пол' value={convertRu[sex]} />
            <InfoItem title='Дата рождения' value={formatDate(dateOfBirth)} />
            <SignOut />
        </div>
    );
}
