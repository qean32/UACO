'use server'

import React from 'react'
import { StudentTableItem } from './item'
import { StudentColumn } from './column'
import { getStudentTable } from '@/app/actions'
import { Table } from './table'


export async function StudentTable() {
    const items = await getStudentTable(1)

    return (
        <Table>
            <StudentColumn />

            <tbody>
                {!!items?.length && items.map(item => {
                    return <StudentTableItem {...item} key={item.Event.id} />
                })}
            </tbody>
        </Table>
    )
}