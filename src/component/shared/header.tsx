'use client'

import Link from 'next/link';
import React from 'react';
import { CustomAvatar, Logo, Title } from '@/component/ui';
import { usePathname } from 'next/navigation'
import { useUser } from '@/lib/hooks';
import { Role } from '@root/prisma/generated/prisma/enums';
import { SearchStudents } from '.';
import { cn } from '@/lib/helpers';


interface Props {
}

export const Header: React.FC<Props> = ({ }: Props) => {
    const pathname = usePathname()
    const user = useUser()

    return (
        <header className="py-5 md:px-15 min-[320px]:px-5">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link className='pr-3' href={'/'}><Logo /></Link>
                    <LinkPack className='xl:flex min-[320px]:hidden mx-5' />
                    <SearchStudents className='md:flex min-[320px]:hidden mr-5 w-100' />
                </div>
                <CustomAvatar user={user} />
            </div>
            <LinkPack className='xl:hidden min-[320px]:flex' />
            <SearchStudents className='md:hidden min-[320px]:flex mt-5' />
        </header>
    );
}

const LinkPack = ({ className }: { className: string }) => {
    const pathname = usePathname()
    const user = useUser()

    return <div className={cn("flex min-[320px]:flex-col md:flex-row md:gap-3", className)}>
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
    </div>
}
