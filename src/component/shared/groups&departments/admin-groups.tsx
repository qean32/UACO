'use client'

import { RTKQKEY } from "@/config";
import { useGetGroupsQuery } from "@/redux/api/group";
import { AccessAction, UpdateGroup } from "../modal";
import { Table } from "../table";
import { Button, NoFindData } from "@/component/ui";
import { Group } from "@root/prisma/generated/prisma/browser";
import { useAction, useEditableRequest } from "@/lib/hooks";
import { deleteGroupAction } from "@/app/(root)/admin/actions";
import { handleAccess } from "@/lib/helpers";
import { actionEnum } from "@/@types";
import { actionTypeEnum } from "@/@types/action.enum";
import Skeleton from "react-loading-skeleton";

export const AdminGroups: React.FC<{}> = ({ }: {}) => {
    const [setAction] = useAction()
    // @ts-ignore
    const [items, loading] = useEditableRequest<Group>({
        _fetch: useGetGroupsQuery,
        key: RTKQKEY.getGroups,
        type: actionTypeEnum.group
    })
    const deleteGroup = (code: string) => {
        deleteGroupAction({ code })
            .then(res => {
                handleAccess(res, {})
                setAction({ action: actionEnum.delete, payload: res, type: actionTypeEnum.group })
            })
    }

    return (
        <>
            <Table>
                <thead className="py-3 bg-gray-200">
                    <tr>
                        <th className="w-1/2">Группа</th>
                        <th className="w-1/10">Курс</th>
                        <th className="w-1/10">Семестр</th>
                        <th className="w-1/10">Отделение</th>
                        <th className="w-1/10"></th>
                        <th className="w-1/10"></th>
                    </tr>
                </thead>
                <tbody>
                    {!!items?.length && items.map(item => {
                        return <tr className="" key={item.code}>
                            <td>{item.code}</td>
                            <td>{Math.round(item.semester / 2)}</td>
                            <td>{item.semester}</td>
                            <td>{item.DepartmentCode}</td>
                            <td><AccessAction
                                action={() => deleteGroup(item.code)}
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
            {loading && <Skeleton count={5} height={70} className="mt-3" />}
            {!items?.length && !loading && <NoFindData />}
        </>
    );
}
