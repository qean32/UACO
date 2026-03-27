'use client'

import { GeneralColumn } from './column'
import { Table } from './table'
import { DynamicPagination } from '@/component/master'
import { GeneralTableItem } from './item'
import { getGeneralTableAction } from '@/app/actions'
import { tableResponse, generalTableItem } from '@/@types'
import { Event } from '@root/prisma/generated/prisma/browser'


export function GeneralTable({ column, items, end }: {
    column: Pick<Event, "name" | "id">[]
} & tableResponse<generalTableItem[]>) {

    return (
        <Table>
            <GeneralColumn events={column} />
            <DynamicPagination
                initialState={items}
                initEnd={end}
                _fetch={getGeneralTableAction}
                fillQueries
                renderItem={(item) => <GeneralTableItem {...item} />}
            />
        </Table>
    )
}
