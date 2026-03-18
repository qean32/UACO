'use client'

import { usePushQuery } from '@/lib/hooks';
import { BookmarkCheck } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { SortColumnItem } from '.';


interface Props {
}

export const SupervisorColumn: React.FC<Props> = ({ }: Props) => {
    const { push } = usePushQuery()
    const url = useSearchParams()

    return (
        <thead className='py-3 bg-gray-200'>
            <tr>
                <th>Название</th>
                <th className='w-1/12'>Дата</th>
                <SortColumnItem nameSort='avg' push={push} sort={!!url.get("avg")}>AM</SortColumnItem>
                <SortColumnItem nameSort='countEstimations' push={push} sort={!!url.get("countEstimations")}>Посещений</SortColumnItem>
                <th className='w-1/12'>Действие</th>
            </tr>
        </thead>
    );
}
