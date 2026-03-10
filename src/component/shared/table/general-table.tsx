'use server'

import React from 'react'
import { GeneralColumn } from './column'
import { getGeneralTable } from '@/app/actions'
import { Table } from './table'
import { UnwrapGeneral } from '.'


export async function GeneralTable() {
    const { column, items } = await getGeneralTable({})

    return (
        <Table>
            <GeneralColumn events={column} />
            <UnwrapGeneral inicialState={items} />
        </Table>
    )
}
