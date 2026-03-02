'use client'

import { fakeEvent, fakeEventColumn } from '@/export'
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


export function StudentEventTable() {
    const [data] = React.useState(fakeEvent)
    const [sorting, setSorting] = React.useState<SortingState>([])
    const table = useReactTable({
        data, columns: fakeEventColumn,
        debugTable: true,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
        }
    })


    return (
        <div className="overflow-scroll min-w-full max-h-[100vh]">
            <table className='w-full'>
                <thead className='h-[50px]'>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header, _) => {
                                return (
                                    <th key={header.id} colSpan={header.colSpan} className={cn('table-column- cursor-pointer bg-gray-300 hover:overflow-x-visible text-sm- font-medium max-w-[160px]', (_ == 0 && 'pl-4'))} style={{ borderRight: '0px' }}>
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
                                                <p>
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
                                            <td key={cell.id} className={cn('py-3', (__ == 0 ? 'pl-4 w-10/12' : 'w-1/12'))} style={{ borderRight: '0px' }}>
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