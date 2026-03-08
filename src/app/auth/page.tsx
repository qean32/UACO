'use client'

import { Logo, Title } from '@/component/ui';
import { Input } from '@/component/ui/input';
import React from 'react';
import { Button } from '@/component/ui/button';
import { FormProvider } from 'react-hook-form';
import { formLoginSchema, TformLoginSchema } from '@/@types/schema/';
import { signIn, useSession } from 'next-auth/react';
import { useMyForm } from '@/lib/hooks';

interface Props {
}

export default function Page({ }: Props) {
    const { data: session } = useSession();
    console.log(session)

    const onSubmit = async (data: TformLoginSchema) => {
        try {
            const resp = await signIn('credentials', {
                ...data,
                redirect: false,
            });

            if (!resp?.ok) {
                throw Error();
            }
        } catch (error) {
            console.error('Error [LOGIN]', error);
        }
    };
    const { form, submitHandler } = useMyForm<TformLoginSchema>(
        formLoginSchema,
        onSubmit
    );

    return (
        <FormProvider {...form}>
            <div className='flex-1 flex justify-center items-center'>
                <form className="flex flex-col gap-3 bg-white -translate-y-1/2 py-5 px-5 rounded-lg items-center border border-gray-100" onSubmit={submitHandler}>
                    <Title className='pb-2'>Авторизация</Title>
                    <Logo className='mb-3' />
                    <Input placeholder='Логин' className='w-[350px] h-[40px]' name='email' />
                    <Input placeholder='Пароль' className='w-[350px] h-[40px]' type='password' name='password' />
                    <Button variant='primary' className='w-full mt-3' type='submit'>Войти</Button>
                </form>
            </div>
        </FormProvider>
    );
}
