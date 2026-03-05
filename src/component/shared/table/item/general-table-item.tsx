'use client'

import React from 'react';
import { TableItem } from './table-item';
import { generalAttendanceTableItem } from '@/@types';


interface Props {
    even: boolean
    item: generalAttendanceTableItem
}

export const GeneralTableItem: React.FC<Props> = ({ even, item: { User, estimationsEvent } }: Props) => {

    return (
        <TableItem even={even} style={{}}>
            <th className='pl-5 pr-7'>{User.firstName} {User.lastName} {User.sureName}</th>
            {!!estimationsEvent.length &&
                estimationsEvent.map((item, _) =>
                    <td key={item.EventId} className='text-center font-medium'>{Number(!!item.estimation)}</td>
                )
            }
        </TableItem>
    );
}