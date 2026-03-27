'use client'

import { StudentTableItem } from './item'
import { StudentColumn } from './column'
import { Table } from './table'
import { DynamicPagination } from '@/component/master'
import { getStudentTableAction } from '@/app/(root)/profile/actions'
import { studentTableItem, tableResponse } from '@/@types'

interface Props {
    id: number
}

export function StudentTable({ id, end, items }: tableResponse<studentTableItem[]> & { id: number }) {

    return (
        <Table>
            <StudentColumn />
            <DynamicPagination
                fillQueries={true}
                initialState={items}
                initEnd={end}
                staticParam={{ userId: id }}
                _fetch={getStudentTableAction}
                renderItem={(item) => <StudentTableItem {...item} />}
            />
        </Table>
    )
}
