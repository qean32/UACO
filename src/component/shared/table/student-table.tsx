'use server'

import React from 'react'
import { StudentTableItem } from './item'
import { StudentColumn } from './column'
import { getStudentTable } from '@/app/actions'
import { Table } from './table'
import { DynamicPagination } from '@/component/master'

interface Props {
    id: number
}

export async function StudentTable({ id }: Props) {
    const { items } = await getStudentTable({ userId: id, page: 0 })

    return (
        <Table>
            <StudentColumn />
            <DynamicPagination
                initialState={items}
                staticParam={{ userId: id }}
                _fetch={getStudentTable}
                RenderItem={StudentTableItem}
            />
        </Table>
    )
}
