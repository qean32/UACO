'use client'

import { EstimationTableItem } from './item'
import { EstimationColumn } from './column'
import { Table } from './table'
import { DynamicPagination } from '@/component/master'
import { getEstimationTableAction } from '@/app/(root)/estimation/actions'
import { estimationTableItem, tableResponse } from '@/@types'
import { useRef } from 'react'

export function EstimationTable({ end, items, id }: tableResponse<estimationTableItem[]> & { id: number }) {
    const ref = useRef<HTMLDivElement | null>(null)

    return (
        <>
            <Table>
                <EstimationColumn />
                <DynamicPagination
                    initialState={items}
                    initEnd={end}
                    ref={ref}
                    staticParam={{ userId: id }}
                    _fetch={getEstimationTableAction}
                    renderItem={(item) => <EstimationTableItem {...item} />}
                />
            </Table>
            <div ref={ref}></div>
        </>
    )
}
