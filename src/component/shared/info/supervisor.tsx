'use client'


import React from 'react';
import { InfoItem } from './info-item';
import { SignOut } from "..";
import { User } from "@root/prisma/generated/prisma/browser";
import { convertRu } from '@/config';
import { GroupType } from '@/@types';
import { formatDate } from '@/lib/helpers';


interface Props extends Pick<User, "firstName" | "lastName" | "sureName" | "sex" | "dateOfBirth"> {
    Group: GroupType
}

export const Supervisor: React.FC<Props> = ({ dateOfBirth, firstName, lastName, sex, sureName, Group }: Props) => {

    return (
        <div className="flex h-fit flex-col rounded-md w-1/6 min-w-[220px] bg-gray-100 p-5">
            <p className='pb-5 text-lg font-bold'>Информация</p>
            <InfoItem title='ФИО' value={`${firstName} ${lastName} ${sureName}`} />
            <InfoItem title='Отделение' value={`${Group?.Department?.code} ${Group?.Department?.name}`} />
            <InfoItem title='Пол' value={convertRu[sex]} />
            <InfoItem title='Дата рождения' value={formatDate(dateOfBirth)} />
            <SignOut />
        </div>
    );
}
