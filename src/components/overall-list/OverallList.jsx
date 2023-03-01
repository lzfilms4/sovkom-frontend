import React from 'react'
import './overall-list.scss'
import { data } from '../../constants'
import { Progress, Space } from 'antd';
import {useSelector} from "react-redux";
const icons = [
    <i className='bx bx-receipt'></i>,
    <i className='bx bx-user'></i>,
    <i className='bx bx-cube'></i>,
    <i className='bx bx-dollar'></i>
]

const OverallList = () => {
    const {persons} = useSelector((state) => state.persons)
    const moodPercent = persons.length? Math.round(100 *  persons.reduce((acc,el) => acc+el.mood.reduce((sum, e) => sum+e,0), 0) / (persons.length*5)) : 0

    return (
        <ul className='overall-list'>
            <li className="overall-list__item" >
                <div className="overall-list__item__icon">
                    <Progress type="circle" percent={moodPercent} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
                </div>
                {/* <div className="overall-list__item__info">
                    <div className="title">
                        asd
                    </div>
                    <span>dd</span>
                </div> */}
            </li>
        </ul>
    )
}

export default OverallList
