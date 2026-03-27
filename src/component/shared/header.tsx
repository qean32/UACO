'use client'

import Link from 'next/link';
import React from 'react';
import { CustomAvatar, Logo, Title } from '@/component/ui';
import { usePathname } from 'next/navigation'
import { useUser } from '@/lib/hooks';
import { Role } from '@root/prisma/generated/prisma/enums';
import { Search } from '.';


interface Props {
}

export const Header: React.FC<Props> = ({ }: Props) => {
    const pathname = usePathname()
    const user = useUser()

    return (
        <header className="flex justify-between px-15 items-center py-2">
            <div className="flex items-center gap-4">
                <Link className='pr-3' href={'/'}><Logo /></Link>
                <Link href={'/'}>
                    <Title size='text-xl' color={!(pathname == '/') ? '' : 'primary-color'}>
                        Основная таблица</Title>
                </Link>
                <Link href={`/estimation/${user?.id ?? 0}`}>
                    <Title size='text-xl' color={!(pathname == `/estimation/${user?.id ?? 0}`) ? '' : 'primary-color'}>
                        Оценки</Title>
                </Link>
                {user?.role == Role.ADMIN &&
                    <Link href={`/admin`}>
                        <Title size='text-xl' color={!(pathname == '/admin') ? '' : 'primary-color'}>
                            Админ</Title>
                    </Link>}
                <Search />
            </div>
            <CustomAvatar user={user} />
        </header>
    );
}
