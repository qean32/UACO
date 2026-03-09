'use client'

import React from 'react';
import { TableItem } from './';
import { estimationTableItem } from '@/@types';
import { formatDate } from '@/lib/helpers';
import { PickEstimation } from '@/component/shared/pick';


interface Props extends estimationTableItem {
}

export const EstimationTableItem: React.FC<Props> = ({ Event: { date, id, name }, estimation }: Props) => {

    return (
        <TableItem>
            <td>{name}</td>
            <td className='px-3'>
                <PickEstimation id={id} estimation={estimation} /></td>
            <td>4.1</td>
            <td>{formatDate(date)}</td>
            <td>52</td>
        </TableItem>
    );
}