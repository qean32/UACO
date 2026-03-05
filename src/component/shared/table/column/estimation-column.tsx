'use client'

import React from 'react';


interface Props {
}

export const EstimationColumn: React.FC<Props> = ({ }: Props) => {

    return (
        <div className="rounded-t-sm px-5 text-sm font-medium grid bg-gray-300 py-3" style={{ gridTemplateColumns: '7fr 1fr 1fr 1fr 1fr' }} >
            <p>Мероприятие</p>
            <p className='text-center'>Оценка</p>
            <p className='text-center'>Ср. оценка</p>
            <p className='text-center'>Дата</p>
            <p className='text-center'>Посещений</p>
        </div>
    );
}