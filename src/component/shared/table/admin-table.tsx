'use client'

import React from 'react'
import { AdminTableItem } from './item'
import { AdminColumn } from './column'


export function AdminTable() {


    return (
        <>
            <AdminColumn />
            {[].map((item, index) => {
                return <AdminTableItem event={item} index={index + 1} value={12} />
            })}
        </>
    )
}