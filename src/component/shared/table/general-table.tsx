'use server'

import React from 'react'
import { GeneralColumn } from './column'
import { getGeneralTable } from '@/app/actions'
import { Table } from './table'
import { UnwrapGeneral } from '.'
import { TformFilterSchema } from '@/@types/schema'


export async function GeneralTable({ queries }: { queries: TformFilterSchema }) {
    // @ts-ignore
    const { column, items } = await getGeneralTable(queries)

    return (
        <Table>
            <GeneralColumn events={column} />
            <UnwrapGeneral initialState={items} />
        </Table>
    )
}
