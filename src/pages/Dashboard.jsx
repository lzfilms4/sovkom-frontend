import React from 'react'
import Box from '../components/box/Box'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboard-wrapper/DashboardWrapper'
import SummaryBox, { SummaryBoxSpecial, SummaryBoxSpecialHappiness } from '../components/summary-box/SummaryBox'
import { colors, data } from '../constants'
import './Dashboard.scss'

import { useParams, useNavigate } from "react-router-dom";

import OverallList from '../components/overall-list/OverallList'
import RevenueList from '../components/revenue-list/RevenueList'
import { useSelector, useDispatch } from 'react-redux'
import {fetchPersons} from '../redux/slices/personsSlice'

const Dashboard = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {dispatch(fetchPersons())}, [])
    const { id } = useParams();
    const navigate = useNavigate();
    const person = useSelector((state) => state.persons.persons).find(person => person._id === id)
    const persons = useSelector((state) => state.persons)
    console.log(person)
    return (
        persons.persons.length?
        (
            <DashboardWrapper>
            <DashboardWrapperMain>
                <div className="row">
                    <div className="col-5 col-md-12">
                        <SummaryBoxSpecial name={person.fullName} yearsAtCompany={person.YearsAtCompany} age={person.age} mood={person.mood} item={data.revenueSummary} />
                    </div>
                    <div className="col-7 hide-md">
                        <SummaryBoxSpecialHappiness happiness={person.happiness*10} />
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
                    <div className="title mb small">
                        В основном положительное
                    </div>

                </div>
                
                <div className="title mb">Cамое плохое настроение</div>
                <div className="mb">
                    <RevenueList />
                </div>
            </DashboardWrapperRight>
        </DashboardWrapper>
        ) : ('')
    )
}

export default Dashboard

const RevenueByMonthsChart = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {dispatch(fetchPersons())}, [])
    const { id } = useParams();
    const navigate = useNavigate();
    const person = useSelector((state) => state.persons.persons).find(person => person._id === id)
    const persons = useSelector((state) => state.persons)
    return (
        <>
            <div className="title mb tests">
                Результаты тестов
            </div>
            <div className='tests'>
                {
                    persons.length?
                    person.tests.map((el,id) => (
                        <div className="tests__block">
                            <div className="tests__block_title">{el[0]}</div>
                            <div className="tests__block_value">{el[1]}</div>
                        </div>
                    )) : ('')
                }

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