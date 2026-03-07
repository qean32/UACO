'use server'

import React from 'react'
import { AdminTableItem } from './item'
import { AdminColumn } from './column'
import { getAdminTable } from '@/app/actions'
import { Table } from './table'


export async function AdminTable() {
    const events = await getAdminTable()

    return (
        <Table>
            <AdminColumn />

            <tbody>
                {!!events?.length && events.map((item, index) => {
                    return <AdminTableItem item={item} even={!!((index + 1) % 2 == 0)} key={item.id} />
                })}
            </tbody>
        </Table>
    )
}