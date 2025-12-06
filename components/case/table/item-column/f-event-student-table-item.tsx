'use client'

import { FEventStudentTableItemDto } from '@/@types';
import { cn } from '@/lib';
import React from 'react';


interface Props extends FEventStudentTableItemDto {
    index: number
}

export const FEventStudentTableItem: React.FC<Props> = (item: Props) => {

    return (
        <tr className={cn('', (item.index % 2 != 0 && 'bg-gray-200'))}>
            <td className='text-nowrap px-2 py-2'>
                {item.User.first_name} {item.User.last_name} {item.User.sure_name}
            </td>
            {item.gradeEvents.sort((a, b) => a.EventId - b.EventId).map(item => {
                return (
                    <td className='text-end pr-2'>
                        {Number(item.presence)}
                    </td>
                )
            })}
        </tr>
    );
}