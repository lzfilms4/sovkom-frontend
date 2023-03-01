import React from 'react'
import { data } from '../../constants'
import './revenue-list.scss'
import ProgressBar from '../progressbar/ProgressBar'
import {useSelector} from "react-redux";

const RevenueList = () => {
    const {persons} = useSelector((state) => state.persons)
    const personsSorted = JSON.parse(JSON.stringify(persons))
    const personsNew = persons.length? personsSorted.sort((a,b) => Math.floor((a.mood.reduce((sum,el) => sum+el,0))/a.mood.length) - Math.floor((b.mood.reduce((sum,el) => sum+el,0))/b.mood.length)) : 0

    return (
        <ul className='revenue-list'>
            {
                personsNew.map((item, index) => (
                    <li className="revenue-list__item" key={`revenue-${index}`}>
                        <div className="revenue-list__item__title">
                            {item.fullName.split(' ')[0]}
                            <span >
                                {item.mood} / 5
                            </span>
                        </div>
                        <div className='line'></div>
                    </li>
                    
                ))
            }
        </ul>
    )
}

export default RevenueList
