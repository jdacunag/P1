import { useEffect, useState } from 'react';
import useSession from '../hooks/useSession';
import { useLocation, useParams } from 'wouter';
import * as tasksapi from '../services/tasks';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import style from './Statistics.module.css';
import Card from '../components/Card';
import Title from '../components/Title';

export default function Statistics() {
    // Registra los elementos necesarios de Chart.js
    ChartJS.register(ArcElement, Tooltip, Legend);

    const { userId } = useSession();
    const [setLocation] = useLocation();
    const { projectId } = useParams();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (!userId) {
            setLocation('/login');
            return;
        }

        const fetchData = async () => {
            try {
                const taskList = await tasksapi.getAll(projectId);
                setTasks(taskList);
            } catch (error) {
                alert(error.message);
            }
        };

        fetchData();
    }, [userId, projectId, setLocation]);

    const countStates = () => {
        const stateCount = tasks.reduce((acc, task) => {
            const estado = task.estado || 'Sin Estado';
            acc[estado] = (acc[estado] || 0) + 1;
            return acc;
        }, {});
        return stateCount;
    };

    const chartData = {
        labels: Object.keys(countStates()),
        datasets: [
            {
                data: Object.values(countStates()),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9800'],
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.label || '';
                        const value = context.parsed || 0;
                        return `${label}: ${value}`;
                    },
                },
            },
        },
    };

    return (
        <div className={style.container}>
            <div>
                
            <Card className={style.Card}>
            <Title>Tasks to do and already done </Title>
            <div className={style.pieChartContainer}>
                <Pie options={chartOptions} data={chartData} />
            </div>
            </Card>
            </div>
        </div>
    );
}
