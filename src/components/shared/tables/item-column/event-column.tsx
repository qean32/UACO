'use client'

import React from 'react';


interface Props {
}

export const EventColumn: React.FC<Props> = ({ }: Props) => {

    return (
        <div className="text-sm- font-medium grid bg-gray-300 py-3 pl-7" style={{ gridTemplateColumns: '9fr 1fr 1fr 1fr' }} >
            <p>Название</p>
            <p>Баллы</p>
            <p>Дата</p>
            <p>Действие</p>
        </div>
    );
}