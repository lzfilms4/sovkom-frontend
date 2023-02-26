import React from 'react'
import './overall-list.scss'
import { data } from '../../constants'
import { Progress, Space } from 'antd';
const icons = [
    <i className='bx bx-receipt'></i>,
    <i className='bx bx-user'></i>,
    <i className='bx bx-cube'></i>,
    <i className='bx bx-dollar'></i>
]

const OverallList = () => {
    return (
        <ul className='overall-list'>
            <li className="overall-list__item" >
                <div className="overall-list__item__icon">
                    <Progress type="circle" percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
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
