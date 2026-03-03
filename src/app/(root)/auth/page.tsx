'use client'

import { CustomButton, Title } from '@/component/ui';
import { Input } from '@/component/ui/input';
import React from 'react';
import { cn } from "@/lib/helpers"
import { Button } from '@/component/ui/button';

interface Props {
    className?: string
}

export default function Page({ className }: Props) {

    return (
        <div className={cn('flex-1 flex justify-center items-center', className)}>
            <div className="flex flex-col gap-3 bg-white -translate-y-1/2 py-5 px-5 rounded-lg items-center border border-gray-100">
                <Title className='pb-5'>Авторизация</Title>
                <Input placeholder='Логин' className='w-[350px] h-[40px]' />
                <Input placeholder='Пароль' className='w-[350px] h-[40px]' type='password' />
                <Button variant='primary' className='w-full'>Войти</Button>
            </div>
        </div>
    );
}