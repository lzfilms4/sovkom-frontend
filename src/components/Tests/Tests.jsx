import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {fetchTests} from '../../redux/slices/testsSlice'
import { useParams, useNavigate } from "react-router-dom";
import './Tests.scss';
import axios from "axios";
const Tests = () =>{
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
    console.log(fio)

    const dispatch = useDispatch()
    React.useEffect(() => {dispatch(fetchTests())}, [])
    const { id } = useParams();
    const navigate = useNavigate();
    const tests = useSelector((state) => state.tests)
    const test = useSelector((state) => state.tests.tests).find(test => test._id === id)
    // console.log(test)
    return (
        <div className="maindiv">
        {
            tests.tests.length ? (<div className="title">{test.name}</div>):('')
        }
            <div className="block">
                <div className="col-12 col-md-12">
                    <div className="question">
                        <div className="questionTxt">Введите ваше фио</div>
                    </div>
                    <div className="answers">
                        <ul>
                            <input type="text" onChange={changeFio}></input>
                        </ul>
                    </div>

                </div>
            </div>
        {
            tests.tests.length && step !== test.questions.length ? (
                <div className="block">
                    <div className="col-12 col-md-12">
                        <div className="question">
                            <div className="questionTxt">{test.questions[step]}</div>
                        </div>
                        <div className="answers">
                            <ul>
                                {test.answers[step].map((answer, i) => (
                                    <li key={i}>
                                        <div className="answers" onClick={() => setAnswersValue(test.answersValues[step][i])}>{answer}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            ) : tests.tests.length && step === test.questions.length  ? (
                <div className="acceptBlock">
                    <div className="accept">
                        <div className="acceptText" onClick={sendTest}>Отправить</div>
                    </div>
                </div>
            ) : ('')
            
        }

        </div>
    );
}

export default Tests;