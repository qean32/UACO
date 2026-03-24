'use client'

import { Logo, Title, FormInput, DangerText } from '@/component/ui';
import { Button } from '@/component/ui/button';
import { FormProvider } from 'react-hook-form';
import { formLoginSchema, TformLoginSchema } from '@/@types/schema/';
import { signIn } from 'next-auth/react';
import { useMyForm } from '@/lib/hooks';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const [error, setError] = useState("")
    const router = useRouter()
    const { form, submitHandler } = useMyForm<TformLoginSchema>(
        formLoginSchema,
        async (data: TformLoginSchema) => {
            try {
                const resp = await signIn('credentials', {
                    ...data,
                    redirect: false,
                });

                if (!resp?.ok) {
                    setError(resp?.error ?? "")
                    return
                }


                router.push("/")
            } catch (error) {
                console.error('Error [LOGIN]', error);
            }
        }
    );

    return (
        <FormProvider {...form}>
            <div className='flex-1 flex justify-center items-center'>
                <form className="flex flex-col gap-3 bg-white -translate-y-1/2 py-5 px-5 rounded-lg items-center border border-gray-100" onSubmit={submitHandler}>
                    <Title className='pb-2'>Авторизация</Title>
                    <Logo className='mb-3' />
                    <FormInput placeholder='Почта' className='w-[350px] h-[40px]' name='email' />
                    <FormInput placeholder='Пароль' className='w-[350px] h-[40px]' type='password' name='password' />
                    {error && <DangerText>{error}</DangerText>}
                    <Button variant='primary' className='w-full mt-3' type='submit'>Войти</Button>
                </form>
            </div>
        </FormProvider>
    );
}
