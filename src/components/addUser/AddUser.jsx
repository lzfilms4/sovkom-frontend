import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {fetchTests} from '../../redux/slices/testsSlice'
import { useParams, useNavigate } from "react-router-dom";
import './AddUser.scss';
import axios from "axios";


const AddUser = () => {
    const [answers, setAnswers] = React.useState([])
    const [step, setStep] = React.useState(0)
    const [fullName, setfullName] = React.useState('')
    const [age, setage] = React.useState('')
    const [BusinessTravel, setBusinessTravel] = React.useState('')
    const [DailyRate, setDailyRate] = React.useState('')
    const [Department, setDepartment] = React.useState('')
    const [Education, setEducation] = React.useState('')
    const [EducationField, setEducationField] = React.useState('')
    const [Gender, setGender] = React.useState('')
    const [JobInvolement, setJobInvolement] = React.useState('')
    const [JobLevel, setJobLevel] = React.useState('')
    const [MaritalStatus, setMaritalStatus] = React.useState('')
    const [MonthlyIncome, setMonthlyIncome] = React.useState('')
    const [NumCompaniesWorked, setNumCompaniesWorked] = React.useState('')
    const [OverTime, setOverTime] = React.useState('')
    const [HourlyRate, setHourlyRate] = React.useState('')
    const [StandardHours, setStandardHours] = React.useState('')
    const [TotalWorkingYears, setTotalWorkingYears] = React.useState('')
    const [YearsAtCompany, setYearsAtCompany] = React.useState('')
    const [YearsInCurrentRole, setYearsInCurrentRole] = React.useState('')
    const [YearsSinceLastPromotion, setYearsSinceLastPromotion] = React.useState('')
    const [YearsWithCurrManager, setYearsWithCurrManager] = React.useState('')

    const setAnswersValue = (value) => {
        setAnswers(prev => [...prev, value])
        setStep(step + 1)
    }
    const sendTest = () => {
        axios.post('https://bright-wasp-long-johns.cyclic.app/person/create',
            {fullName: fullName,
        age : age,
        BusinessTravel: BusinessTravel,
                DailyRate: DailyRate,
                Department: Department,
                Education: Education,
                EducationField: EducationField,
                Gender: Gender,
                HourlyRate: HourlyRate,
                JobInvolement: JobInvolement,
                JobLevel: JobLevel,
                MaritalStatus: MaritalStatus,
                MonthlyIncome: MonthlyIncome,
                NumCompaniesWorked: NumCompaniesWorked,
                OverTime: OverTime,
                StandardHours: StandardHours,
                TotalWorkingYears: TotalWorkingYears,
                YearsAtCompany: YearsAtCompany,
                YearsInCurrentRole: YearsInCurrentRole,
                YearsSinceLastPromotion: YearsSinceLastPromotion,
                YearsWithCurrManager: YearsWithCurrManager
        })
    }
    const CopyName = (event) => {
        setfullName(event.target.value);
    }
    const CopyAge = (event) => {
        setage(event.target.value);
    }
    const CopyBusinessTravel = (event) => {
        setBusinessTravel("1");
        document.getElementById("Travel").innerHTML="Часто";
    }
    const CopyBusinessTravel2 = (event) => {
        setBusinessTravel("2");
        document.getElementById("Travel").innerHTML="Редко";    }
    const CopyBusinessTravel0 = (event) => {
        setBusinessTravel("0");
        document.getElementById("Travel").innerHTML="Нет";    }
    const CopyDailyRate = (event) => {
    setDailyRate(event.target.value);
    }
    const CopyDepartment = (event) => {
        setDepartment("1");
        document.getElementById("Department").innerHTML="Исследовательская разработка";
    }
    const CopyDepartment0 = (event) => {
        setDepartment("0");
        document.getElementById("Department").innerHTML="Человеческие ресурсы";
    }
    const CopyDepartment2 = (event) => {
        setDepartment("2");
        document.getElementById("Department").innerHTML="Продажи";    }
    const CopyEducation = (event) => {
        setEducation(event.target.value);
    }
    const CopyEducationField = (event) => {
        setEducationField(event.target.value);
    }
    const CopyGender = (event) => {
        setGender("1");
        document.getElementById("gender").innerHTML="Мужской";
    }
    const CopyGender0 = (event) => {
        setGender("0");
        document.getElementById("gender").innerHTML="Женский";
    }
    const CopyHourlyRate = (event) => {
        setHourlyRate(event.target.value);
    }
    const CopyJobInvolement = (event) => {
        setJobInvolement(event.target.value);
    }
    const CopyJobLevel = (event) => {
        setJobLevel(event.target.value);
    }
    const CopyMaritalStatus = (event) => {
        setOverTime("1");
        document.getElementById("FamilyPos").innerHTML="Женат (замужем)";    }
    const CopyMaritalStatus2 = (event) => {
        setOverTime("2");
        document.getElementById("FamilyPos").innerHTML="Не женат (не замужем)";    }
    const CopyMaritalStatus0 = (event) => {
        setOverTime("0");
        document.getElementById("FamilyPos").innerHTML="Разведён (разведена)";    }
    const CopyMonthlyIncome = (event) => {
        setMonthlyIncome(event.target.value);
    }
    const CopyNumCompaniesWorked = (event) => {
        setNumCompaniesWorked(event.target.value);
    }
    const CopyOverTime = (event) => {
        setOverTime("1");
        document.getElementById("Over").innerHTML="Да";
    }
    const CopyOverTime0 = (event) => {
        setOverTime("0");
        document.getElementById("Over").innerHTML="Нет";
    }
    const CopyStandardHours = (event) => {
        setStandardHours(event.target.value);
    }
    const CopyTotalWorkingYears = (event) => {
        setTotalWorkingYears(event.target.value);
    }
    const CopyYearsAtCompany = (event) => {
        setYearsAtCompany(event.target.value);
    }
    const CopyYearsInCurrentRole = (event) => {
        setYearsInCurrentRole(event.target.value);
    }
    const CopyYearsSinceLastPromotion = (event) => {
        setYearsSinceLastPromotion(event.target.value);
    }
    const CopyYearsWithCurrManager = (event) => {
        setYearsWithCurrManager(event.target.value);
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
                            <input  type="text" onChange={CopyName} ></input>
                    </div>

                    <div className="question">
                        <div className="questionTxt">Возраст</div>
                    </div>
                    <div className="answers">
                            <input type="text" onChange={CopyAge}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Деловые поездки</div>
                    </div>

                        <div className="answers">
                            <nav id="nav">
                                <ul>
                                    <li><a href="#" id="Travel">Выбрать</a>
                                        <ul className="second">
                                            <li><a href="#" onClick={CopyBusinessTravel}>Часто</a></li>
                                            <li><a href="#" onClick={CopyBusinessTravel2}>Редко</a></li>
                                            <li><a href="#" onClick={CopyBusinessTravel0}>Нет</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    <div className="question">
                        <div className="questionTxt">Дневная норма (часов)</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyDailyRate}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Отдел</div>
                    </div>
                    <div className="answers">
                        <nav id="nav">
                            <ul>
                                <li><a href="#" id="Department">Выбрать</a>
                                    <ul className="second">
                                        <li><a href="#" onClick={CopyDepartment}>Исследовательская разработка</a></li>
                                        <li><a href="#" onClick={CopyDepartment2}>Продажи</a></li>
                                        <li><a href="#" onClick={CopyDepartment0}>Человеческие ресурсы</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Образование</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyEducation}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Лет с момента последнего повышения</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyYearsSinceLastPromotion}></input>
                    </div>

                </div>
                <div className="col-4 col-md-12 block">
                    <div className="question">
                        <div className="questionTxt">Пол</div>
                    </div>
                    <div className="answers">
                        <nav id="nav">
                            <ul>
                                <li><a href="#" id="gender">Выбрать</a>
                                    <ul className="second">
                                        <li><a href="#" onClick={CopyGender}>Мужской</a></li>
                                        <li><a href="#" onClick={CopyGender0}>Женский</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Почасовая ставка</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyHourlyRate}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Вовлеченность в работу</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyJobInvolement}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Уровень работы</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyJobLevel}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Семейное положение</div>
                    </div>
                    <div className="answers">
                        <nav id="nav">
                            <ul>
                                <li><a href="#" id="FamilyPos">Выбрать</a>
                                    <ul className="second">
                                        <li><a href="#" onClick={CopyMaritalStatus}>Женат(замужем)</a></li>
                                        <li><a href="#" onClick={CopyMaritalStatus0}>Разведён(разведена)</a></li>
                                        <li><a href="#" onClick={CopyMaritalStatus2}>Не женат(не замужем)</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Ежемесячный доход</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyMonthlyIncome}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Количество компаний в которых работал</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyNumCompaniesWorked}></input>
                    </div>
                </div>
                <div className="col-4 col-md-12 block">
                    <div className="question">
                        <div className="questionTxt">Сверхурочные</div>
                    </div>
                    <div className="answers">
                        <nav id="nav">
                            <ul>
                                <li><a href="#" id="Over">Выбрать</a>
                                    <ul className="second">
                                        <li><a href="#" onClick={CopyOverTime}>Да</a></li>
                                        <li><a href="#" onClick={CopyOverTime0}>Нет</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Стандартные часы</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyStandardHours}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Всего рабочих лет </div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyTotalWorkingYears}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Лет в компании</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyYearsAtCompany}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Лет в Нынешней роли</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyYearsInCurrentRole}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">Сфера образования</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyEducationField}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt"> Годы работы с Нынешним менеджером</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyYearsWithCurrManager}></input>
                    </div>

                </div>

            </div>
            <div className="accept">
                <button type="submit">Отправить</button>
            </div>
        </div>
    );
}

export default AddUser;