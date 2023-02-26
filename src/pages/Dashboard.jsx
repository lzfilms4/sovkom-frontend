import React from 'react'
import Box from '../components/box/Box'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox, { SummaryBoxSpecial, SummaryBoxSpecialHappiness } from '../components/summary-box/SummaryBox'
import { colors, data } from '../constants'
import './Dashboard.scss'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import OverallList from '../components/overall-list/OverallList'
import RevenueList from '../components/revenue-list/RevenueList'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <DashboardWrapperMain>
                <div className="row">
                    <div className="col-4 col-md-12">
                        <SummaryBoxSpecial item={data.revenueSummary} />
                    </div>
                    <div className="col-8 hide-md">
                        <SummaryBoxSpecialHappiness item={data.revenueSummary} />
                    </div>
                    <div className="col-12 col-md-12">
                        <div className="row">
                            {
                                data.summary.map((item, index) => (
                                    <div key={`summary-${index}`} className="col-3 col-md-3 col-sm-12 mb">
                                        <SummaryBox item={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Box>
                            <RevenueByMonthsChart />
                        </Box>
                    </div>
                </div>
            </DashboardWrapperMain>
            <DashboardWrapperRight>
                <div className='right__block'>
                    <div className="title mb">Настроение сотрудников</div>
                    <div className="mb">
                        <OverallList />
                    </div> 
                    <div className="title mb small">В основном положительное</div>

                </div>
                <div className="title mb">Cамое плохое настроение</div>
                <div className="mb">
                    <RevenueList />
                </div>
            </DashboardWrapperRight>
        </DashboardWrapper>
    )
}

export default Dashboard

const RevenueByMonthsChart = () => {
    return (
        <>
            <div className="title mb tests">
                Результаты тестов
            </div>
            <div className='tests'>
                <div className="tests__block">
                    <div className="tests__block_title">Название теста</div>
                    <div className="tests__block_value">24</div>
                </div>
                <div className="tests__block">
                    <div className="tests__block_title">Название теста</div>
                    <div className="tests__block_value">24</div>
                </div>
                <div className="tests__block">
                    <div className="tests__block_title">Название теста</div>
                    <div className="tests__block_value">24</div>
                </div>
            </div>
        </>
    )
}