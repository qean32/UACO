'use client'

import React from 'react';
import { TableItem } from './table-item';
import { studentTableItem } from '@/@types';
import { formatDate } from '@/lib/helpers';


interface Props extends studentTableItem {
}

export const StudentTableItem: React.FC<Props> = ({ Event: { date, id, name }, estimation }: Props) => {

    return (
        <TableItem>
            <td>{name}</td>
            <td>{formatDate(date)}</td>
            <td>{Number(!!estimation)}</td>
            <td>{estimation}</td>
        </TableItem>
    );
}