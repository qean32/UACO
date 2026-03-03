'use client'

import React from 'react';


interface Props {
}

export const EstimationColumn: React.FC<Props> = ({ }: Props) => {

    return (
        <div className="rounded-t-sm px-4 text-sm font-medium grid bg-gray-300 py-3" style={{ gridTemplateColumns: '12fr 1fr 1fr' }} >
            <p>Название</p>
            <p className='text-center'>Оценка</p>
            <p className='text-end'>Дата</p>
        </div>
    );
}