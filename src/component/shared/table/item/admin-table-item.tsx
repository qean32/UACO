'use client'

import { Button } from '@/component/ui/button';
import React from 'react';
import { TableItem } from './';


interface Props {
    event: { date: string, name: string }
    even: boolean
}

export const AdminTableItem: React.FC<Props> = ({ event: { date, name }, even }: Props) => {

    return (
        <TableItem even={even} style={{ gridTemplateColumns: '9fr 1fr 1fr' }}>
            <p>{name}</p>
            <p>{date}</p>
            <Button className='bg-red-700 hover:bg-red-600 mx-2 px-0'>Удалить</Button>
        </TableItem>
    );
}