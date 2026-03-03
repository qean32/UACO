'use client'

import { Title } from '@/component/ui';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import Link from 'next/link';
import React from 'react';
import { User } from '@root/prisma/generated/prisma/browser'
import { ruRole } from '@/@types';


interface Props extends Pick<User, 'firstName' | 'sureName' | 'lastName'> {
    role: ruRole
}

export const CustomAvatar: React.FC<Props> = ({ sureName, firstName, lastName, role }: Props) => {

    return (
        <Link href={'/profile'}>
            <Avatar>
                <div className="flex gap-4 items-center">
                    <div>
                        <Title color='' size='text-md' className='translate-y-0.5 font-medium'>{lastName} {firstName.at(0)}. {sureName.at(0)}.</Title>
                        <Title color='' size='text-sm' className='font-medium'>{role}</Title>
                    </div>
                    <AvatarImage src="/ava.png" className='rounded-full aspect-square w-[50px]' />
                    <AvatarFallback></AvatarFallback>
                </div>
            </Avatar>
        </Link>
    );
}