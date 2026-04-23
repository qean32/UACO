import { diagramConfig, RTKQKEY } from '@/config';
import { useGetBestGroupsQuery } from '@/redux/api/best';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestGroupDiagram() {
    const { data } = useGetBestGroupsQuery(RTKQKEY.bestGroups);

    return <Pie data={{
        labels: data?.map(item => item.GroupCode),
        datasets: [{
            data: data?.map(item => item._count.estimationsEvents),
            ...diagramConfig,
        }],
    }} />
}
