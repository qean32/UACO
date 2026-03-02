'use client'

import { fakeAllEvent, fakeAllEventColumn } from '@/export'
import { cn } from "@/src/lib/helpers/utils"
import {
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from '@tanstack/react-table'
import { AArrowDown, AArrowUp } from 'lucide-react'
import React from 'react'


export function AllStudentEventTable() {
    const [data] = React.useState(fakeAllEvent)
    const [sorting, setSorting] = React.useState<SortingState>([])
    const table = useReactTable({
        data, columns: fakeAllEventColumn,
        debugTable: true,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
        }
    })


    return (
        <div className="p-2 overflow-x-scroll min-w-full max-h-[100vh] table-">
            <table>
                <thead className='h-[50px]'>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return (
                                    <th key={header.id} colSpan={header.colSpan} className='table-column- cursor-pointer bg-gray-300 text-nowrap overflow-hidden text-sm- font-medium w-fit px-4 hover:z-10 hover:w-[400px]'>
                                        {header.isPlaceholder ? null : (
                                            <div
                                                className={
                                                    (header.column.getCanSort()
                                                        ? 'cursor-pointer'
                                                        : '') + ' flex items-center gap-2'
                                                }
                                                onClick={header.column.getToggleSortingHandler()}
                                                title={
                                                    header.column.getCanSort()
                                                        ? header.column.getNextSortingOrder() === 'asc'
                                                            ? 'Sort ascending'
                                                            : header.column.getNextSortingOrder() === 'desc'
                                                                ? 'Sort descending'
                                                                : 'Clear sort'
                                                        : undefined
                                                }
                                            >
                                                {{
                                                    asc: <AArrowDown />,
                                                    desc: <AArrowUp />,
                                                }[header.column.getIsSorted() as string] ?? null}
                                                <p className='max-w-[90px] text-ellipsis overflow-hidden hover:overflow-visible'>
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                </p>
                                            </div>
                                        )}
                                    </th>
                                )
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table
                        .getRowModel()
                        .rows
                        .map((row, _) => {
                            return (
                                <tr key={row.id} className={cn("text-sm- font-medium", (!(_ % 2 == 0) ? 'bg-gray-200' : 'bg-gray-100'))}>
                                    {row.getVisibleCells().map((cell, __) => {
                                        return (
                                            <td key={cell.id} className={cn('py-3 hover:overflow-visible cursor-pointer max-w-[220px] text-nowrap overflow-hidden text-ellipsis pr-4', (__ == 0 ? 'pl-4' : 'text-end pr-5'))}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                </tbody>
            </table>
            {/* <div>{table.getRowModel().rows.length.toLocaleString()} Rows</div> */}
            {/* <pre>{JSON.stringify(sorting, null, 2)}</pre> */}
        </div>
    )
}