'use client'

import { Input } from '@/component/ui';
import React from 'react';
import { TableItem } from './';
import { EstimationEvent } from '@root/prisma/generated/prisma/browser';


interface Props {
    even: boolean
    item: Pick<EstimationEvent, "EventId" | "estimation">
}

export const EstimationTableItem: React.FC<Props> = ({ even, item }: Props) => {

    return (
        <TableItem even={even} style={{ gridTemplateColumns: '9fr 1fr 1fr 1fr 1fr' }} >
            <p>название</p>
            <p><Input type="text" className='w-[60px]' defaultValue={'value'} /></p>
            <p>ср оценка</p>
            <p>дата</p>
            <p>Посещений</p>
        </TableItem>
    );
}