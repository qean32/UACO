'use server'

import { StudentTableItem } from './item'
import { StudentColumn } from './column'
import { getStudentTable } from '@/app/actions'
import { Table } from './table'
import { DynamicPagination } from '@/component/master'

interface Props {
    id: number
}

export async function StudentTable({ id }: Props) {
    const { items, end } = await getStudentTable({ userId: id, page: 0 })
    console.log(items)

    return (
        <Table>
            <StudentColumn />
            <DynamicPagination
                initialState={items}
                initEnd={end}
                staticParam={{ userId: id }}
                _fetch={getStudentTable}
                RenderItem={StudentTableItem}
            />
        </Table>
    )
}
