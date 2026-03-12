'use client'


import React from 'react';
import { InfoItem } from './info-item';
import { SignOut } from "..";
import { User } from "@root/prisma/generated/prisma/browser";
import { formatDate } from '@/lib/helpers';
import { convertRu } from '@/config';
import { GroupType } from '@/@types';

interface Props extends Pick<User, "firstName" | "lastName" | "sureName" | "sex" | "dateOfBirth" | "GroupCode"> {
    Group: GroupType
}

export const Student: React.FC<Props> = ({ dateOfBirth, firstName, lastName, sex, sureName, GroupCode, Group }: Props) => {

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