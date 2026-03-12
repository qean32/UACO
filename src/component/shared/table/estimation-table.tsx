'use server'

import React from 'react'
import { EstimationTableItem } from './item'
import { EstimationColumn } from './column'
import { getEstimationTable } from '@/app/actions'
import { Table } from './table'
import { DynamicPagination } from '@/component/master'

type Props = {
    id: number
}

export async function EstimationTable({ id }: Props) {
    const { items } = await getEstimationTable({ page: 0, userId: id })

    return (
        <Table>
            <EstimationColumn />
            <DynamicPagination
                initialState={items}
                staticParam={{ userId: id }}
                _fetch={getEstimationTable}
                RenderItem={EstimationTableItem}
            />
        </Table>
    )
}
