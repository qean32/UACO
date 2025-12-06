'use client'

import { CustomButton, Title } from '@/components/ui';
import { Input } from '@/components/ui/input';
import React from 'react';
import { cn } from "@/lib"

interface Props {
    className?: string
}

export default function Page({ className }: Props) {

    return (
        <div className={cn('flex-1 flex justify-center items-center', className)}>
            <div className="flex flex-col gap-3 bg-white -translate-y-1/2 py-7 px-5 rounded-lg items-center border border-gray-100">
                <Title>Авторизация</Title>
                <Input placeholder='Логин' className='w-[350px] h-[40px]' />
                <Input placeholder='Пароль' className='w-[350px] h-[40px]' type='password' />
                <CustomButton><p>Войти</p></CustomButton>
            </div>
        </div>
    );
}