'use client'

import { SupervisorTableItem } from './item'
import { SupervisorColumn } from './column'
import { Table } from './table'
import { DynamicPagination } from '@/component/master'
import { deleteEventAction, getSupervisorTableAction } from '@/app/(root)/admin/actions'
import { tableResponse } from '@/@types'
import { supervisorTableItem } from '@/@types/supervisor-table-item.type'
import { handleAccess, handleCatch } from '@/lib/helpers'
import { useRef } from 'react'


export function SupervisorTable({ end, items }: tableResponse<supervisorTableItem[]>) {
    const deleteEvent = (id: number) => {
        deleteEventAction({ id })
            .then(res => handleAccess(res, { title: "Мероприятие удалено!", description: "Вы удалили мероприятие" }))
            .catch(handleCatch)
    }
    const ref = useRef<HTMLDivElement | null>(null)

    return (
        <>
            <Table>
                <SupervisorColumn />
                <DynamicPagination
                    fillQueries={true}
                    ref={ref}
                    initialState={items}
                    initEnd={end}
                    _fetch={getSupervisorTableAction}
                    renderItem={(item) => <SupervisorTableItem action={deleteEvent} {...item} />}
                />
            </Table>
            <div ref={ref}></div>
        </>
    )
}
