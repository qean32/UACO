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
            <Link href={'/'}><h2 className="font-bold text-xl">LOGO</h2></Link>
            <div className="flex gap-4">
                <Link href={'/'}><Title size='text-xl' color={!(pathname == '/') ? 'text-black' : 'text-blue-600'}>Основная таблица</Title></Link>
                <Link href={'/grade'}><Title size='text-xl' color={!(pathname == '/grade') ? 'text-black' : 'text-blue-600'}>Оценка мероприятий</Title></Link>
            </div>
            <CustomAvatar />
        </header>
    );
}