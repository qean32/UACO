'use server'

import { EstimationTableItem } from './item'
import { EstimationColumn } from './column'
import { Table } from './table'
import { DynamicPagination } from '@/component/master'
import { getEstimationTableAction } from '@/app/(root)/estimation/actions'

type Props = {
    id: number
}

export async function EstimationTable({ id }: Props) {
    const { items, end } = await getEstimationTableAction({ page: 0, userId: id })

    return (
        <Table>
            <EstimationColumn />
            <DynamicPagination
                initialState={items}
                initEnd={end}
                staticParam={{ userId: id }}
                _fetch={getEstimationTableAction}
                RenderItem={EstimationTableItem}
            />
        </Table>
    )
}
