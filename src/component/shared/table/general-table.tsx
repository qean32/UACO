'use server'

import React from 'react'
import { GeneralColumn } from './column'
import { getGeneralTable } from '@/app/actions'
import { Table } from './table'
import { TformFilterSchema } from '@/@types/schema'
import { DynamicPagination } from '@/component/master'
import { GeneralTableItem } from './item'


export async function GeneralTable({ queries }: { queries: TformFilterSchema }) {
    // @ts-ignore
    const { column, items, end } = await getGeneralTable(queries)

    return (
        <Table>
            <GeneralColumn events={column} />
            <DynamicPagination
                initialState={items}
                initEnd={end}
                _fetch={getGeneralTable}
                fillQueries
                RenderItem={GeneralTableItem}
            />
        </Table>
    )
}
