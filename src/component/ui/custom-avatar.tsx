'use client'

import { convertRu } from '@/config';
import { formatFio } from '@/lib/helpers';
import { useUser } from '@/lib/hooks';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import Link from 'next/link';
import React from 'react';
import Skeleton from 'react-loading-skeleton';


interface Props {
}

export const CustomAvatar: React.FC<Props> = ({ }: Props) => {
    const user = useUser()

    return (
        <Link href={`/profile/${user?.id}`} className='h-[60px] w-[300px]'>
            <Avatar>
                <div className="flex gap-4 items-center">
                    <div className='font-medium'>
                        {user?.id && <p className='translate-y-0.5'>{formatFio({ firstName: user.firstName, lastName: user.lastName, sureName: user.sureName })}</p>}
                        {user?.id && <p className='text-sm'>{convertRu[user.role]}</p>}
                    </div>
                    <AvatarImage src="/ava.png" className='rounded-full aspect-square w-[45px]' />
                    <AvatarFallback>
                        <Skeleton height={55} width={180} />
                    </AvatarFallback>
                </div>
            </Avatar>
        </Link>
    );
}
