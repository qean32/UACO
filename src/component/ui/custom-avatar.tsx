'use client'

import { convertRu } from '@/config';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';


interface Props {
}

export const CustomAvatar: React.FC<Props> = ({ }: Props) => {
    const { data } = useSession()

    return (
        <Link href={'/profile'}>
            <Avatar>
                <div className="flex gap-4 items-center">
                    <div className='font-medium w-[100px]'>
                        {data?.user && <p className='translate-y-0.5'>{data.user.firstName}</p>}
                        {data?.user && <p className='text-sm'>{convertRu[data.user.role]}</p>}
                    </div>
                    <AvatarImage src="/ava.png" className='rounded-full aspect-square w-[45px]' />
                    <AvatarFallback>
                        <AvatarImage src="/ava.png" className='rounded-full aspect-square w-[45px]' />
                    </AvatarFallback>
                </div>
            </Avatar>
        </Link>
    );
}