'use client'

import React from 'react';
import { TableItem } from './table-item';
import { generalTableItem } from '@/@types';


interface Props extends generalTableItem {
}

export const GeneralTableItem: React.FC<Props> = ({ User, estimationsEvent }: Props) => {

    return (
        <TableItem>
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