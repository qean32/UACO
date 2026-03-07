'use client'

import React from 'react';
import { TableItem } from './';
import { estimationTableItem } from '@/@types';
import { formatDate } from '@/lib/helpers';
import { PickEstimation } from '@/component/shared/pick';


interface Props {
    even: boolean
    item: estimationTableItem
}

export const EstimationTableItem: React.FC<Props> = ({ even, item: { Event: { date, id, name }, estimation } }: Props) => {

    return (
        <TableItem even={even}>
            <td>{name}</td>
            <td className='px-5 bg-gray-50'><PickEstimation /></td>
            <td>4.1</td>
            <td>{formatDate(date)}</td>
            <td>52</td>
        </TableItem>
    );
}