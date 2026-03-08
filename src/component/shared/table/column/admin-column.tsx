'use client'

import React from 'react';


interface Props {
}

export const AdminColumn: React.FC<Props> = ({ }: Props) => {

    return (
        <thead className='py-3 bg-gray-200'>
            <tr>
                <th>Название</th>
                <th className='w-1/12'>AM</th>
                <th className='w-1/12'>Дата</th>
                <th className='w-1/12'>Действие</th>
            </tr>
        </thead>
    );
}