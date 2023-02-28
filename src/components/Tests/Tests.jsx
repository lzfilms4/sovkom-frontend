import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {fetchTests} from '../../redux/slices/testsSlice'
import { useParams, useNavigate } from "react-router-dom";
import './Tests.scss';
const Tests = () =>{
    const [answers, setAnswers] = React.useState()
    const dispatch = useDispatch()
    React.useEffect(() => {dispatch(fetchTests())}, [])
    const { id } = useParams();
    const navigate = useNavigate();
    const tests = useSelector((state) => state.tests)
    const test = useSelector((state) => state.tests.tests).find(test => test._id === id)
    return (
        <div className="maindiv">
        {
            tests.tests.length ? (<div className="title">{test.name}</div>):('')
        }
        {
            tests.tests.length ? test.questions.map((el,id) => (
                <div className="block" key={id}>
                    <div className="col-12 col-md-12">
                        <div className="question">
                            <div className="questionTxt">{el}</div>
                        </div>
                        <div className="answers">
                            <ul>
                                {test.answers[id].map((answer, i) => (
                                    <li key={i}>
                                        <div className="answers">{answer}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            )) : ('')
            
        }
            <div className="acceptBlock">
                <div className="accept">
                    <div className="acceptText">Отправить</div>
                </div>
            </div>
        </div>
    );
}

export default Tests;