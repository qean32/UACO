'use client'

import { Title } from '@/component/ui';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import Link from 'next/link';
import React from 'react';
import { User } from '@root/prisma/generated/prisma/browser'


interface Props extends Pick<User, 'firstName' | 'sureName'> {
}

export const CustomAvatar: React.FC<Props> = ({ sureName, firstName }: Props) => {

    return (
        <Link href={'/profile'}>
            <Avatar>
                <div className="flex gap-4 items-center">
                    <div>
                        <Title color='' className='translate-y-0.5'>{firstName}</Title>
                        <Title color='' size='text-sm'>{sureName}</Title>
                    </div>
                    <AvatarImage src="https://github.com/shadcn.png" className='rounded-full aspect-square w-[50px]' />
                    <AvatarFallback></AvatarFallback>
                </div>
            </Avatar>
        </Link>
    );
}