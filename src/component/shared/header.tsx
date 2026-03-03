'use client'

import Link from 'next/link';
import React from 'react';
import { CustomAvatar, Logo, Title } from '@/component/ui';
import { usePathname } from 'next/navigation'


interface Props {
}

export const Header: React.FC<Props> = ({ }: Props) => {
    const pathname = usePathname()

    return (
        <header className="flex justify-around items-center py-2">
            <Link href={'/'}><Logo /></Link>
            <div className="flex gap-4">
                <Link href={'/'}>
                    <Title size='text-xl' color={!(pathname == '/') ? '' : 'primary-color'}>
                        Основная таблица</Title>
                </Link>
                <Link href={'/estimation'}>
                    <Title size='text-xl' color={!(pathname == '/estimation') ? '' : 'primary-color'}>
                        Мои оценки</Title>
                </Link>
            </div>
            <CustomAvatar firstName='Генадий' lastName='Михаил' sureName='Евгеньевич' role='Организатор' />
        </header>
    );
}