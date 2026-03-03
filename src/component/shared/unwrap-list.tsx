import React from 'react'
import { cn } from '@/lib/helpers'
import { Title } from '../ui'

interface Props {
    className?: string
    title: string
}


export const UnwrapList: React.FC<Props> = ({ className, title }: Props) => {
    return (
        <div className={cn('flex flex-col w-1/3', className)}>
            <Title size='text-2xl'>{title}</Title>
            <ol className='pt-5'>
                {[].map((item, index) => {
                    return <div key={index} className='grid' style={{ gridTemplateColumns: '1fr 2fr' }}>
                        <Title className='w-[100px]'>{item}</Title> <p>200 Баллов</p>
                    </div>
                })}
            </ol>
        </div>
    )
}
