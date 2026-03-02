'use client'

import React from 'react';


interface Props {
}

export const GradeTableColumn: React.FC<Props> = ({ }: Props) => {

    return (
        <div className="text-sm- font-medium grid bg-gray-300 py-4 pl-7" style={{ gridTemplateColumns: '9fr 1fr 1fr 1fr' }} >
            <p>Наименование</p>
            <p>Ср. Оценка</p>
            <p>Оценка</p>
            <p>Присутствие</p>
        </div>
    );
}