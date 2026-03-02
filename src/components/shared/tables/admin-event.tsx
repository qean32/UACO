'use client'

import { fakeEvent } from '@/export'
import React from 'react'
import { EventColumn, EventItem } from './item-column'


export function AdminEventTable() {


    return (
        <>
            <EventColumn />
            {fakeEvent.map((item, _) => {
                return <EventItem event={item} index={_ + 1} value={12} />
            })}
        </>
    )
}