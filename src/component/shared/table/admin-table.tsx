'use client'

import React from 'react'
import { AdminTableItem } from './item'
import { AdminColumn } from './column'


export function AdminTable() {

    return (
        <>
            <AdminColumn />
            {[].map((item, index) => {
                return <AdminTableItem event={item} even={!!(index + 1 % 2)} />
            })}
        </>
    )
}