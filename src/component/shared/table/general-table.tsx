'use client'

import { GeneralColumn } from './column'
import { Table } from './table'
import { DynamicPagination } from '@/component/master'
import { GeneralTableItem } from './item'
import { getGeneralTableAction } from '@/app/actions'
import { tableResponse, generalTableItem } from '@/@types'
import { Event } from '@root/prisma/generated/prisma/browser'
import { useRef } from 'react'


export function GeneralTable({ column, items, end }: {
    column: Pick<Event, "name" | "id">[]
} & tableResponse<generalTableItem[]>) {
    const ref = useRef<HTMLDivElement | null>(null)

    return (
        <>
            <Table>
                <GeneralColumn events={column} />
                <DynamicPagination
                    initialState={items}
                    ref={ref}
                    initEnd={end}
                    _fetch={getGeneralTableAction}
                    fillQueries
                    renderItem={(item) => <GeneralTableItem {...item} />}
                />
            </Table>
            <div ref={ref}></div>
        </>
    )
}
