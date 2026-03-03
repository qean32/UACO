'use client'

import React from 'react'
import { EstimationTableItem } from './item'
import { EstimationColumn } from './column'


export function EstimationEventTable() {


    return (
        <div className='rounded-sm overflow-hidden'>
            <EstimationColumn />
            {[].map((item, index) => {
                return <EstimationTableItem index={index + 1} />
            })}
        </div>
    )
}