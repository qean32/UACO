'use server'

import { StudentTableItem } from './item'
import { StudentColumn } from './column'
import { Table } from './table'
import { DynamicPagination } from '@/component/master'
import { getStudentTable } from '@/app/actions'

interface Props {
    id: number
}

export async function StudentTable({ id }: Props) {
    const { items, end } = await getStudentTable({ userId: id, page: 0 })

    return (
        <Table>
            <StudentColumn />
            <DynamicPagination
                fillQueries={true}
                initialState={items}
                initEnd={end}
                staticParam={{ userId: id }}
                _fetch={getStudentTable}
                RenderItem={StudentTableItem}
            />
        </Table>
    )
}
