'use client'

import { Button } from '@/component/ui/button';
import React from 'react';
import { TableItem } from '.';
import { SupervisorTableItemType } from '@/@types';
import { formatDate } from '@/lib/helpers';


interface Props extends SupervisorTableItemType {
}

export const SupervisorTableItem: React.FC<Props> = ({ date, name }: Props) => {

    return (
        <TableItem>
            <td>{name}</td>
            <td>4.1</td>
            <td>{formatDate(date)}</td>
            <td><Button variant='danger'>Удалить</Button></td>
        </TableItem>
    );
}