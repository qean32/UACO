'use client'

import { RTKQKEY } from "@/config";
import { useGetDepartmentsQuery } from "@/redux/api/department";
import { AccessAction, UpdateDepartment } from "../modal";
import { Table } from "../table";
import { Button, NoFindData } from "@/component/ui";
import { useAction, useEditableRequest } from "@/lib/hooks";
import { Department } from "@root/prisma/generated/prisma/browser";
import { actionEnum } from "@/@types";
import { actionTypeEnum } from "@/@types/action.enum";
import { deleteDepartmentAction } from "@/app/(root)/admin/actions";
import { handleAccess } from "@/lib/helpers";
import Skeleton from "react-loading-skeleton";

export const AdminDepartments: React.FC<{}> = () => {
    const [setAction] = useAction()
    // @ts-ignore
    const [items, loading] = useEditableRequest<Department>({
        _fetch: useGetDepartmentsQuery,
        key: RTKQKEY.getDepartments,
        type: actionTypeEnum.department
    })
    const deleteDepartment = (code: string) => {
        deleteDepartmentAction({ code })
            .then(res => {
                handleAccess(res, {})
                setAction({ action: actionEnum.delete, payload: res, type: actionTypeEnum.department })
            })
    }

    return (
        <>
            <Table className="mt-10">
                <thead className="py-3 bg-gray-200">
                    <tr>
                        <th className="w-1/2">Отделение</th>
                        <th className="w-1/10">Код</th>
                        <th className="w-1/10"></th>
                        <th className="w-1/10"></th>
                    </tr>
                </thead>
                <tbody>
                    {!!items?.length && items.map(item => {
                        return <tr className="" key={item.code}>
                            <td>{item.name}</td>
                            <td>{item.code}</td>
                            <td>
                                <AccessAction
                                    action={() => deleteDepartment(item.code)}
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
            {loading && <Skeleton count={5} height={70} className="mt-3" />}
            {!items?.length && !loading && <NoFindData />}
        </>
    );
}
