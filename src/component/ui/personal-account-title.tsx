'use server'

import React from 'react';
import { ArrowBack } from '.';
import { getRole } from '@/app/actions';
import { Role } from '@root/prisma/generated/prisma/enums';


interface Props {
    id: number
}

const map = new Map<Role, string>([
    ["ADMIN", "Кабинет администратора"],
    ["STUDENT", "Личная карточка студента"],
    ["SUPERVISOR", "Кабинет организатора"]
])

export const PersonalAccountTitle: React.FC<Props> = async ({ id }: Props) => {
    const role = await getRole(id)

    return (
        <div className='flex h-[200px] items-center justify-around px-15'>
            <ArrowBack />
            <p className='w-full text-center text-4xl font-bold'>
                {role && map.get(role.role)}
            </p>
        </div>
    );
}