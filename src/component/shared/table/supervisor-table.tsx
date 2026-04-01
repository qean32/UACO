'use client'

import { SupervisorTableItem } from './item'
import { SupervisorColumn } from './column'
import { Table } from './table'
import { DynamicPagination } from '@/component/master'
import { deleteEventAction, getSupervisorTableAction } from '@/app/(root)/admin/actions'
import { actionEnum, tableResponse } from '@/@types'
import { supervisorTableItem } from '@/@types/supervisor-table-item.type'
import { handleAccess, handleCatch } from '@/lib/helpers'
import { useRef } from 'react'
import { useAction } from '@/lib/hooks'
import { actionTypeEnum } from '@/@types/action.enum'


export function SupervisorTable({ end, items }: tableResponse<supervisorTableItem[]>) {
    const [setAction] = useAction()
    const deleteEvent = (id: number) => {
        deleteEventAction({ id })
            .then(res => {
                handleAccess(res)
                setAction({ action: actionEnum.delete, payload: { id: res.data.id }, type: actionTypeEnum.event })
            })
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
                    typeAction={actionTypeEnum.event}
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
