'use client'

import { SupervisorTableItem } from './item'
import { SupervisorColumn } from './column'
import { Table } from './table'
import { DynamicPagination } from '@/component/master'
import { getSupervisorTableAction } from '@/app/(root)/admin/actions'
import { tableResponse } from '@/@types'
import { supervisorTableItem } from '@/@types/supervisor-table-item.type'


export function SupervisorTable({ end, items }: tableResponse<supervisorTableItem[]>) {

    return (
        <Table>
            <SupervisorColumn />
            <DynamicPagination
                fillQueries={true}
                initialState={items}
                initEnd={end}
                _fetch={getSupervisorTableAction}
                renderItem={(item) => <SupervisorTableItem {...item} />}
            />
        </Table>
    )
}
