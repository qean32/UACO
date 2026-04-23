'use server'

import React from 'react';
import { ArrowBack } from '.';
import { Role } from '@root/prisma/generated/prisma/enums';
import { getRoleAction } from '@/app/(root)/profile/actions';


interface Props {
    id: number
}

const map = new Map<Role, string>([
    ["ADMIN", "Кабинет администратора"],
    ["STUDENT", "Личная карточка студента"],
    ["SUPERVISOR", "Кабинет организатора"]
])

export const PersonalAccountTitle: React.FC<Props> = async ({ id }: Props) => {
    const role = await getRoleAction(id)

    return (
        <div className='flex h-50 min-[320px]:flex-col md:flex-row items-center justify-around'>
            <ArrowBack />
            <p className='w-full text-center md:text-4xl min-[320px]:text-3xl font-bold primary-color'>
                {role && map.get(role.role)}
            </p>
        </div>
    );
}
