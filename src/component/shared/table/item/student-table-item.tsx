'use client'

import React from 'react';
import { TableItem } from './table-item';
import { studentTableItem } from '@/@types';
import { formatDate } from '@/lib/helpers';


interface Props {
    even: boolean
    item: studentTableItem
}

export const StudentTableItem: React.FC<Props> = ({ even, item: { Event: { date, id, name }, estimation } }: Props) => {

    return (
        <TableItem even={even}>
            <td>{name}</td>
            <td>{formatDate(date)}</td>
            <td>{Number(!!estimation)}</td>
            <td>{estimation}</td>
        </TableItem>
    );
}