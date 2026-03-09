'use server'

import React from 'react'
import { StudentTableItem } from './item'
import { StudentColumn } from './column'
import { getStudentTable } from '@/app/actions'
import { Table } from './table'

interface Props {
    id: number
}

export async function StudentTable({ id }: Props) {
    const items = await getStudentTable(id)

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