'use client'

import React from 'react';


interface Props {
}

export const AdminColumn: React.FC<Props> = ({ }: Props) => {

    return (
        <div className="rounded-t-sm text-sm font-medium grid bg-gray-300 py-3" style={{ gridTemplateColumns: '12fr 1fr 1fr' }} >
            <p className='pl-4'>Название</p>
            <p>Дата</p>
            <p>Действие</p>
        </div>
    );
}