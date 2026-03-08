'use client'

import React from 'react';
import { TableItem } from './table-item';
import { generalTableItem } from '@/@types';


interface Props {
    even: boolean
    item: generalTableItem
}

export const GeneralTableItem: React.FC<Props> = ({ even, item: { User, estimationsEvent } }: Props) => {

    return (
        <TableItem even={even}>
            <td>{User.firstName} {User.lastName} {User.sureName}</td>
            {!!estimationsEvent.length &&
                estimationsEvent.map(item =>

                    <td key={item.EventId}>
                        {Number(!!item.estimation)}
                    </td>
                )
            }
        </TableItem>
    );
}