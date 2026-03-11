'use server'

import React from 'react'
import { SupervisorTableItem } from './item'
import { AdminColumn } from './column'
import { getSupervisorTable } from '@/app/actions'
import { Table } from './table'
import { DynamicPagination } from '@/component/master'


export async function SupervisorTable() {
    const { items } = await getSupervisorTable({ page: 0 })

    return (
        <Table>
            <AdminColumn />
            <DynamicPagination
                initialState={items}
                _fetch={getSupervisorTable}
                RenderItem={SupervisorTableItem}
            />
        </Table>
    )
}
