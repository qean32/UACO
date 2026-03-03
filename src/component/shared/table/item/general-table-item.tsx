'use client'

import React from 'react';
import { TableItem } from './table-item';


interface Props {
    even: boolean
    estimations: number[]
}

export const GeneralTableItem: React.FC<Props> = ({ even, estimations }: Props) => {

    return (
        <TableItem even={even} style={{}}>
            <p>name</p>
            {!!estimations.length &&
                estimations.map((item, _) =>
                    <p>{item}</p>
                )
            }
        </TableItem>
    );
}