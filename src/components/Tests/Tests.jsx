import React from "react";
import './Tests.scss';
import {data} from "../../constants";
import {Link} from "react-router-dom";
import {decrement, fetchPersons, increment} from '../../redux/slices/personsSlice'

import SummaryBox, {SummaryBoxSpecial} from "../summary-box/SummaryBox";
import { useParams, useNavigate } from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
const Tests = () =>{
    const dispatch = useDispatch()
    const { id } = useParams();
    const navigate = useNavigate();
    const person = useSelector((state) => state.persons.persons).find(person => person._id === id)
    console.log(person)
    return (
        <div className="maindiv">
        <div className="block">
            <div className="col-12 col-md-12">
                <div className="question">
                    <div className="questionTxt">Вопрос</div>
                </div>
                <div className="answers">
                    <ul>
                        <li>
                            <div className="answers1">
                                persons.persons.map((el,id) => (
                                <div>{el.fullName}</div>
                                ))</div>
                            </li>
                        <li>
                            <div className="answers2">2</div>
                        </li>
                        <li>
                            <div className="answers3">3</div>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
            <div className="acceptBlock">
                <div className="accept">
                    <div className="acceptText">Отправить</div>
                </div>
            </div>
        </div>
    );
}

export default Tests;