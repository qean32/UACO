'use client'

import React from 'react';


interface Props {
}

export const EstimationColumn: React.FC<Props> = ({ }: Props) => {

    return (
        <thead className='py-3 bg-gray-300'>
            <tr>
                <th>Мероприятие</th>
                <th className='w-1/12'>Оценка</th>
                <th className='w-1/12'>А.М.</th>
                <th className='w-1/12'>Дата</th>
                <th className='w-1/12'>Посещений</th>
            </tr>
        </thead>
    );
}