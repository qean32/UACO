'use client'

import React from 'react';


interface Props {
    title: string
}

export const FEventStudentTableColumnItem: React.FC<Props> = ({ title }: Props) => {

    return (
        <th className='origin-left text-start text-nowrap px-2 py-4 cursor-pointer transition-300 max-w-[120px] hover:max-w-[400px] overflow-hidden text-ellipsis'>
            {title}
        </th>
    );
}