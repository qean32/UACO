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

                    <td key={item.EventId}
                        className='text-center max-w-[100px] hover:px-5 overflow-hidden hover:max-w-[500px] transition-all duration-200 cursor-pointer'>
                        {Number(!!item.estimation)}
                    </td>
                )
            }
        </TableItem>
    );
}