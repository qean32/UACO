'use client'

import Link from 'next/link';
import React from 'react';
import { CustomAvatar, Title } from '../ui';
import { usePathname } from 'next/navigation'


interface Props {
}

export const Header: React.FC<Props> = ({ }: Props) => {
    const pathname = usePathname()

    return (
        <header className="flex justify-around items-center py-2">
            <Link href={'/'}><img src='/logo.svg' className='w-20' /></Link>
            <div className="flex gap-4">
                <Link href={'/estimation'}>
                    <Title size='text-xl' color={!(pathname == '/estimation') ? '' : 'primary-color'}>
                        Мои оценки</Title>
                </Link>
                <Link href={'/'}>
                    <Title size='text-xl' color={!(pathname == '/') ? '' : 'primary-color'}>
                        Основная таблица</Title>
                </Link>
            </div>
            <CustomAvatar firstName='Генадий' sureName='Евгеньевич' />
        </header>
    );
}