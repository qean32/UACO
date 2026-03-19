'use server'

import { SupervisorTableItem } from './item'
import { SupervisorColumn } from './column'
import { Table } from './table'
import { DynamicPagination } from '@/component/master'
import { getSupervisorTable } from '@/app/actions'


export async function SupervisorTable() {
    const { items, end } = await getSupervisorTable({ page: 0 })

    return (
        <Table>
            <SupervisorColumn />
            <DynamicPagination
                fillQueries={true}
                initialState={items}
                initEnd={end}
                _fetch={getSupervisorTable}
                RenderItem={SupervisorTableItem}
            />
        </Table>
    )
}
