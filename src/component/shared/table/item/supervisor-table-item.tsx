'use client'

import { Button } from '@/component/ui/button';
import React from 'react';
import { TableItem } from '.';
import { supervisorTableItemType } from '@/@types';
import { formatDate, handleAccess, handleCatch } from '@/lib/helpers';
import { Role } from '@root/prisma/generated/prisma/enums';
import { useUser } from '@/lib/hooks';
import { deleteEventAction } from '@/app/(root)/admin/actions';
import { AccessAction } from '../../modal';


interface Props extends supervisorTableItemType {
    action: (id: number) => void
}

export const SupervisorTableItem: React.FC<Props> = ({ date, name, SupervisorId, avg, count, id, action }: Props) => {
    const user = useUser()

    return (
        <TableItem>
            <td>{name}</td>
            <td>{formatDate(date)}</td>
            <td>{avg.toFixed(1)}</td>
            <td>{count}</td>
            <td>
                <AccessAction
                    action={() => action(id)}
                    alert='Удалить мероприятие'
                    description='Это приведет к удалению всех связанных оценок'
                >
                    <Button disabled={(SupervisorId != user?.id && user?.role != Role.ADMIN)} variant='danger'>Удалить</Button>
                </AccessAction>
            </td>
        </TableItem >
    );
}
