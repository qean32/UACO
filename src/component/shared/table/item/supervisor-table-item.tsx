'use client'

import { Button } from '@/component/ui/button';
import React from 'react';
import { TableItem } from '.';
import { supervisorTableItemType } from '@/@types';
import { formatDate } from '@/lib/helpers';
import { Role } from '@root/prisma/generated/prisma/enums';
import { useUser } from '@/lib/hooks';


interface Props extends supervisorTableItemType {
}

export const SupervisorTableItem: React.FC<Props> = ({ date, name, SupervisorId, avg, count }: Props) => {
    const user = useUser()

    return (
        <TableItem>
            <td>{name}</td>
            <td>{formatDate(date)}</td>
            <td>{avg}</td>
            <td>{count}</td>
            <td><Button disabled={(SupervisorId != user?.id && user?.role != Role.ADMIN)} variant='danger'>Удалить</Button></td>
        </TableItem>
    );
}
