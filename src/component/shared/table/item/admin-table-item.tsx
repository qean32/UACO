'use client'

import { Button } from '@/component/ui/button';
import React from 'react';
import { TableItem } from './';
import { adminTableItem } from '@/@types';
import { formatDate } from '@/lib/helpers';


interface Props {
    item: adminTableItem
    even: boolean
}

export const AdminTableItem: React.FC<Props> = ({ item: { date, name }, even }: Props) => {

    return (
        <TableItem even={even}>
            <td>{name}</td>
            <td>4.1</td>
            <td>{formatDate(date)}</td>
            <td><Button variant='danger'>Удалить</Button></td>
        </TableItem>
    );
}