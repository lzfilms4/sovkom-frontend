import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {fetchTests} from '../../redux/slices/testsSlice'
import { useParams, useNavigate } from "react-router-dom";
import './AddUser.scss';
import axios from "axios";
const AddUser = () => {
    const [answers, setAnswers] = React.useState([])
    const [step, setStep] = React.useState(0)
    const [fio, setFio] =  React.useState('')
    const setAnswersValue = (value) => {
        setAnswers(prev => [...prev, value])
        setStep(step+1)
    }
    const sendTest = () => {
        const points = Math.round(answers.reduce((acc,el) => acc+el, 0))
        axios.post('https://bright-wasp-long-johns.cyclic.app/person/addTest', {test: [test.name, points]})
    }
    const changeFio = (event) => {
        setFio(event.target.value);
    }

    const dispatch = useDispatch()
    React.useEffect(() => {dispatch(fetchTests())}, [])

    const tests = useSelector((state) => state.tests)

    return (
        <div className="maindiv">
            <div className="bl">
                <div className="col-4 col-md-12 block">
                    <div className="question">
                        <div className="questionTxt">Фио</div>
                    </div>
                    <div className="answers">
                            <input type="text" onChange={changeFio}></input>
                    </div>

                    <div className="question">
                        <div className="questionTxt">Возраст</div>
                    </div>
                    <div className="answers">
                            <input type="text" onChange={changeFio}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Зарплата</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={changeFio}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Переработки (часов)</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={changeFio}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Обычно работает часов в неделю</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={changeFio}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Лет в компании</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={changeFio}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Лет без повышения</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={changeFio}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Лет с текущим менеджером</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={changeFio}></input>
                    </div>
                    <div className="answers">
                        <div className="submit">Отправить</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddUser;