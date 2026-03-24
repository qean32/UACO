'use client'

import { Button } from '@/component/ui/button';
import React from 'react';
import { TableItem } from '.';
import { supervisorTableItemType } from '@/@types';
import { formatDate, handleAccess, handleCatch } from '@/lib/helpers';
import { Role } from '@root/prisma/generated/prisma/enums';
import { useUser } from '@/lib/hooks';
import { deleteEventAction } from '@/app/(root)/admin/actions';


interface Props extends supervisorTableItemType {
}

export const SupervisorTableItem: React.FC<Props> = ({ date, name, SupervisorId, avg, count, id }: Props) => {
    const user = useUser()
    const deleteEvent = () => {
        deleteEventAction({ id })
            .then(res => handleAccess(res, { title: "Мероприятие удалено!", description: "Вы удалили мероприятие" }))
            .catch(handleCatch)
    }

    return (
        <TableItem>
            <td>{name}</td>
            <td>{formatDate(date)}</td>
            <td>{avg}</td>
            <td>{count}</td>
            <td><Button onClick={deleteEvent} disabled={(SupervisorId != user?.id && user?.role != Role.ADMIN)} variant='danger'>Удалить</Button></td>
        </TableItem>
    );
}
