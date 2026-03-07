'use client'

import React from 'react';


interface Props {
}

export const StudentColumn: React.FC<Props> = ({ }: Props) => {

    return (
        <thead className='py-3 bg-gray-300'>
            <tr>
                <th>Название</th>
                <th className='w-1/12'>Дата</th>
                <th className='w-1/12'>Посещение</th>
                <th className='w-1/12'>Оценка</th>
            </tr>
        </thead>
    );
}