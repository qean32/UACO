'use server'

import { GeneralColumn } from './column'
import { Table } from './table'
import { TformFilterSchema } from '@/@types/schema'
import { DynamicPagination } from '@/component/master'
import { GeneralTableItem } from './item'
import { getGeneralTableAction } from '@/app/actions'


export async function GeneralTable({ queries }: { queries: TformFilterSchema }) {
    // @ts-ignore
    const { column, items, end } = await getGeneralTableAction(queries)

    return (
        <Table>
            <GeneralColumn events={column} />
            <DynamicPagination
                initialState={items}
                initEnd={end}
                _fetch={getGeneralTableAction}
                fillQueries
                RenderItem={GeneralTableItem}
            />
        </Table>
    )
}
