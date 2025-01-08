import React from 'react'
import BarChartBasic from './BarChartBasic'
import BasicPieChart from './BasicPieChart'
import LineBasicChart from './LineBasicChart'

export default function RightBar() {
    return (
        <div className="w-[40%] shadow-lg">
            <div className="bg-zinc-800 p-2 rounded-t text-gray-500">
                Analíticas
            </div>
            <div className="w-full  h-screen flex flex-col gap-[5%] items-center">
                <BarChartBasic />
                <LineBasicChart/>
                <BasicPieChart />

            </div>
        </div>
    )
}
