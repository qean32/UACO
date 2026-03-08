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
            <div className="flex items-center gap-4">
                <Link className='pr-3' href={'/'}><Logo /></Link>
                <Link href={'/'}>
                    <Title size='text-xl' color={!(pathname == '/') ? '' : 'primary-color'}>
                        Основная таблица</Title>
                </Link>
                <Link href={'/estimation'}>
                    <Title size='text-xl' color={!(pathname == '/estimation') ? '' : 'primary-color'}>
                        Оценки</Title>
                </Link>
            </div>
            <CustomAvatar />
        </header>
    );
}