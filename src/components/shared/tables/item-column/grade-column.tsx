'use client'

import React from 'react';


interface Props {
}

export const GradeColumn: React.FC<Props> = ({ }: Props) => {

    return (
        <div className="text-sm- font-medium grid bg-gray-300 py-3 pl-7" style={{ gridTemplateColumns: '9fr 1fr 1fr 1fr' }} >
            <p>Название</p>
            <p>Балл</p>
            <p>Оценка</p>
            <p>Ср. Оценка</p>
        </div>
    );
}