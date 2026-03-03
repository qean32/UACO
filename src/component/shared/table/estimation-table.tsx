'use client'

import React from 'react'
import { EstimationTableItem } from './item'
import { EstimationColumn } from './column'


export function EstimationTable() {

    return (
        <div className='overflow-hidden'>
            <EstimationColumn />
            {[].map((_, index) => {
                return <EstimationTableItem even={!!(index + 1 % 2)} />
            })}
        </div>
    )
}