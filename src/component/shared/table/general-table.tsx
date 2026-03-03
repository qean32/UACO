'use client'

import React from 'react'
import { EstimationTableItem } from './item'
import { GeneralColumn } from './column'


export function GeneralTable() {

    return (
        <div className='overflow-hidden'>
            <GeneralColumn events={[]} />
            {[].map((_, index) => {
                return <EstimationTableItem even={!!(index + 1 % 2)} />
            })}
        </div>
    )
}