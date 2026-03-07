'use server'

import React from 'react'
import { GeneralTableItem } from './item'
import { GeneralColumn } from './column'
import { getGeneralTable } from '@/app/actions'
import { Table } from './table'


export async function GeneralTable() {
    const { column, items } = await getGeneralTable({})

    return (
        <Table>
            <GeneralColumn events={column} />

            <tbody>
                {items.map((item, index) => {
                    return <GeneralTableItem item={item} even={!!((index + 1) % 2 == 0)} key={item.User.id} />
                })}
            </tbody>
        </Table>
    )
}