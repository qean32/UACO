'use server'

import { SupervisorTableItem } from './item'
import { SupervisorColumn } from './column'
import { Table } from './table'
import { DynamicPagination } from '@/component/master'
import { getSupervisorTableAction } from '@/app/(root)/admin/actions'


export async function SupervisorTable() {
    const { items, end } = await getSupervisorTableAction({ page: 0 })

    return (
        <Table>
            <SupervisorColumn />
            <DynamicPagination
                fillQueries={true}
                initialState={items}
                initEnd={end}
                _fetch={getSupervisorTableAction}
                RenderItem={SupervisorTableItem}
            />
        </Table>
    )
}
