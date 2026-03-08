'use server'

import React from 'react'
import { SupervisorTableItem } from './item'
import { AdminColumn } from './column'
import { getSupervisorTable } from '@/app/actions'
import { Table } from './table'


export async function SupervisorTable() {
    const events = await getSupervisorTable()

    return (
        <Table>
            <AdminColumn />

            <tbody>
                {!!events?.length && events.map(item => {
                    return <SupervisorTableItem {...item} key={item.id} />
                })}
            </tbody>
        </Table>
    )
}