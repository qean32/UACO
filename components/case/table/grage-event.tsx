'use client'

import { fakeEvent } from '@/export'
import React from 'react'
import { GradeTableColumn, GradeTableItem } from './item-column'


export function GradeEventTable() {


    return (
        <div className='rounded-sm overflow-hidden'>
            <GradeTableColumn />
            {fakeEvent.map(item => {
                return <GradeTableItem {...item} key={item.id} index={_ + 1} />
            })}
        </div>
    )
}