'use client'

import { fakeEvent } from '@/export'
import React from 'react'
import { EventTableColumn, AdminTableItem } from './item-column'


export function AdminTable() {


    return (
        <>
            <EventTableColumn />
            {fakeEvent.map((item, _) => {
                return <AdminTableItem event={item} index={_ + 1} value={12} />
            })}
        </>
    )
}