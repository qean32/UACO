'use client'

import { RTKQKEY } from "@/config";
import { useGetDepartmentsQuery } from "@/store/department";
import { useGetGroupsQuery } from "@/store/group";
import { Table } from "./table";
import { Button } from "../ui";
import { AccessAction, UpdateDepartment, UpdateGroup } from "./modal";

export const GroupsAndDepartments: React.FC<{}> = ({ }: {}) => {
    const { data: department } = useGetDepartmentsQuery(RTKQKEY.getDepartments);
    const { data: groups } = useGetGroupsQuery(RTKQKEY.getGroups);

    return (
        <div className=''>
            <Table className="mt-10">
                <thead className="py-3 bg-gray-200">
                    <tr>
                        <th className="w-1/2">Ниаменование</th>
                        <th className="w-1/10">Код</th>
                        <th className="w-1/10">Действие</th>
                        <th className="w-1/10">Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {!!department?.length && department.map(item => {
                        return <tr className="" key={item.code}>
                            <td>{item.name}</td>
                            <td>{item.code}</td>
                            <td>
                                <AccessAction
                                    action={() => { }}
                                    alert="Удалить отделение"
                                    description="Это приведет к удалению всех связанных групп и студентов, состоящих в этих группах"
                                >
                                    <Button variant='danger'>Удалить</Button>
                                </AccessAction></td>
                            <td><UpdateDepartment code={item.code} /></td>
                        </tr>
                    })}
                </tbody>
            </Table>


            <Table className="mt-10">
                <thead className="py-3 bg-gray-200">
                    <tr>
                        <th className="w-1/2">Группа</th>
                        <th className="w-1/10">Отделение</th>
                        <th className="w-1/10">Семестр</th>
                        <th className="w-1/10">Действие</th>
                        <th className="w-1/10">Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {!!groups?.length && groups.map(item => {
                        return <tr className="" key={item.code}>
                            <td>{item.code}</td>
                            <td>{item.DepartmentCode}</td>
                            <td>{item.semester}</td>
                            <td>
                                <AccessAction
                                    action={() => { }}
                                    alert="Удалить группу"
                                    description="Это приведет к удалению всех студентов, состоящих в группе"
                                >
                                    <Button variant='danger'>Удалить</Button>
                                </AccessAction></td>
                            <td><UpdateGroup code={item.code} /></td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </div>
    );
}
