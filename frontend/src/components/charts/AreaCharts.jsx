import { Typography } from '@mui/material'
import React, { PureComponent } from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'

const data = [
    {
        name: '1 ⭐',
        uv: 4000,
        pv: 0,
        amt: 2400,
    },
    {
        name: '2 ⭐',
        uv: 3000,
        pv: 0,
        amt: 2210,
    },
    {
        name: '3 ⭐',
        uv: 2000,
        pv: 2,
        amt: 2290,
    },
    {
        name: '4 ⭐',
        uv: 2780,
        pv: 2,
        amt: 2000,
    },
    {
        name: '5 ⭐',
        uv: 1890,
        pv: 5,
        amt: 2181,
    },
]

export default function AreaCharts() {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '2%',
            }}
        >
            <Typography
                variant="p"
                className="w-full text-sm bg-gray-800 p-2 rounded"
            >
                Índice de Aceptación
            </Typography>

            <ResponsiveContainer className={'mt-6'} width="100%" height={200}>
                <AreaChart
                    fill={'#fff'}
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" fill={'#fff'} />
                    <YAxis fill={'#fff'} />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="pv"
                        stroke="#000"
                        fill={'black'}
                    />
                    {/*rgb(239 68 68 / 0.9)*/}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}
