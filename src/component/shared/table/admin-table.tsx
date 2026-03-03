'use client'

import React from 'react'
import { AdminTableItem } from './item'
import { EventColumn } from './column'


export function AdminTable() {


    return (
        <>
            <EventColumn />
            {[].map((item, index) => {
                return <AdminTableItem event={item} index={index + 1} value={12} />
            })}
        </>
    )
}