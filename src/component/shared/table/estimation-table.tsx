'use server'

import React from 'react'
import { EstimationTableItem } from './item'
import { EstimationColumn } from './column'
import { getEstimationTable } from '@/app/actions'
import { Table } from './table'


export async function EstimationTable() {
    const items = await getEstimationTable(1)

    return (
        <Table>
            <EstimationColumn />

            <tbody>
                {!!items?.length && items.map(item => {
                    return <EstimationTableItem {...item} key={item.Event.id} />
                })}
            </tbody>
        </Table>
    )
}