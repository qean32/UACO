'use client';


import { searchStudentsAction } from '@/app/actions';
import { cn } from '@/lib/helpers';
import { useBoolean, useDebounceValue } from '@/lib/hooks';
import { User } from '@root/prisma/generated/prisma/browser';
import { Search as SearchIcon } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Props {
    className?: string;
}

export const SearchStudents: React.FC<Props> = ({ className }) => {
    const [search, setSearch] = useState('');
    const [focused, _, onFocused, offFocused] = useBoolean(false)
    const [students, setStudents] = React.useState<Pick<User, "firstName" | "lastName" | "sureName" | "id">[]>([]);
    const debouncedSearch = useDebounceValue(search)

    useEffect(() => {
        if (debouncedSearch) {
            try {
                searchStudentsAction({ search: debouncedSearch }).then(response => setStudents(response))
            } catch (error) {
                console.log(error);
            }
        }
    }, [debouncedSearch])

    const onClickItem = () => {
        offFocused();
        setSearch('');
        setStudents([]);
    };

    return (
        <>
            <div onClick={onClickItem} className={cn("fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30 transition-opacity duration-200",
                focused ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")} />

            <div className={cn('relative z-30 h-11 flex flex-1', className)}>

                <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-3 h-5 text-gray-400" />

                <input className="rounded-sm outline-none bg-gray-100 pl-12 min-w-160"
                    type="text"
                    placeholder="Найти студента..."
                    onFocus={() => onFocused()}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                {!!students.length && (
                    <div className={cn('absolute w-full bg-white rounded-sm py-2 top-14 transition-all duration-200 invisible opacity-0 z-30', (focused && 'visible opacity-100 top-12'))}>
                        {students.map(student => (
                            <Link
                                onClick={onClickItem}
                                key={student.id}
                                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-gray-100"
                                href={`/profile/${student.id}`}>
                                <p>{student.firstName} {student.lastName} {student.sureName}</p>
                            </Link>
                        ))}
                    </div>
                )}

            </div>
        </>
    );
};
