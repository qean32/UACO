'use client'

import { usePushQuery } from '@/lib/hooks';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { SortColumnItem } from '.';
import { sortingDirectionEnum } from '@/@types';


interface Props {
}

export const SupervisorColumn: React.FC<Props> = ({ }: Props) => {
    const { push } = usePushQuery()
    const url = useSearchParams()
    const direction = url.get("direction") == sortingDirectionEnum.desc

    return (
        <thead className='py-3 bg-gray-200'>
            <tr>
                <th>Мероприятие</th>
                <SortColumnItem
                    sort='date'
                    push={push}
                    isCurrent={url.get("sort") == "date"}
                    direction={direction}
                >Дата</SortColumnItem>
                <SortColumnItem
                    sort='avg'
                    push={push}
                    isCurrent={url.get("sort") == "avg"}
                    direction={direction}
                >AM</SortColumnItem>
                <SortColumnItem
                    sort='countEstimations'
                    push={push}
                    isCurrent={url.get("sort") == "countEstimations"}
                    direction={direction}
                >Посещений</SortColumnItem>
                <th className='w-1/12'>Действие</th>
            </tr>
        </thead>
    );
}
