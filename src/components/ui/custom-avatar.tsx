'use client'

import { Title } from '@/src/components/ui';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import Link from 'next/link';
import React from 'react';


interface Props {
    className?: string
}

export const CustomAvatar: React.FC<Props> = ({ }: Props) => {

    return (
        <Link href={'/profile'}>
            <Avatar>
                <div className="flex gap-4 items-center">
                    <div>
                        <Title size=''>Генадий</Title>
                        <Title size='text-sm'>Евгеньевич</Title>
                    </div>
                    <AvatarImage src="https://github.com/shadcn.png" className='rounded-full aspect-square w-[50px]' />
                    <AvatarFallback>CN</AvatarFallback>
                </div>
            </Avatar>
        </Link>
    );
}