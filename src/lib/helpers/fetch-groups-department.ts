import { departmentApi } from '@/redux/api/department';
import { groupApi } from '@/redux/api/group';

export async function fetchMultipleData() {
    try {
        const [departments, groups] = await Promise.all([
            departmentApi.endpoints.getDepartments.initiate(""),
            groupApi.endpoints.getGroups.initiate("")
        ]);

        return [departments, groups]
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
    }
}
