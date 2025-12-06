'use client'

import { FEventStudentTableItemDto } from '@/@types';
import { FEventStudentTableColumnItem, FEventStudentTableItem } from '@/components/case/table/item-column';
import { Event } from '@/lib/generated/prisma/client'
import React from 'react'


export function FEventStudentTable({ events, students }: { events: Event[], students: FEventStudentTableItemDto[] }) {
    const column = [
        {
            id: 'name',
            name: "ФИО",
        },
        ...events
    ]

    return (
        <div className="overflow-x-scroll rounded-sm mb-5">
            <table>
                <thead className="bg-gray-200">
                    <tr className='table-prime text-sm- font-medium'>
                        {column.map(item => {

                            return (<FEventStudentTableColumnItem title={item.name} />)
                        })}
                    </tr>
                </thead>

                <tbody className="text-sm- font-medium">
                    {students.map((item: FEventStudentTableItemDto, _) => {
                        return (

                            <FEventStudentTableItem {...item} index={_} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}