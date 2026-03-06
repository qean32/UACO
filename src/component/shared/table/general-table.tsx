'use server'

import React from 'react'
import { GeneralTableItem } from './item'
import { GeneralColumn } from './column'
import { getGeneralData } from '@/app/actions'


export async function GeneralTable() {
    const { column, items } = await getGeneralData({})

    return (
        <div className="table-outer">
            <table className='mb-10'>
                <GeneralColumn events={column} />
                <tbody>

                    {items.map((item, index) => {
                        return <GeneralTableItem item={item} even={!!((index + 1) % 2 == 0)} />
                    })}
                </tbody>
            </table>
        </div>
    )
}