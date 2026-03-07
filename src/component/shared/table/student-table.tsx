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
                {!!items?.length && items.map((item, index) => {
                    return <StudentTableItem even={!!((index + 1) % 2 == 0)} item={item} />
                })}
            </tbody>
        </Table>
    )
}