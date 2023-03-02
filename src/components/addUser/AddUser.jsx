import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {fetchTests} from '../../redux/slices/testsSlice'
import './AddUser.scss';
import axios from "axios";



const AddUser = () => {
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

    const sendTest = () => {
        axios.post('https://bright-wasp-long-johns.cyclic.app/person/create',
            {
                fullName: fullName,
                age: age,
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
            }).then(res => console.log(res))

    }
    const CopyName = (event) => {
        setfullName(event.target.value);
    }
    const CopyAge = (event) => {
        setage(event.target.value);
    }
    const CopyBusinessTravel = () => {
        setBusinessTravel('1');
        document.getElementById("Travel").innerHTML="Часто";
    }
    const CopyBusinessTravel2 = () => {
        setBusinessTravel('2');
        document.getElementById("Travel").innerHTML="Редко";    }
    const CopyBusinessTravel0 = () => {
        setBusinessTravel('0');
        document.getElementById("Travel").innerHTML="Нет";    }
    const CopyDailyRate = (event) => {
    setDailyRate(event.target.value);
    }
    const CopyDepartment = () => {
        setDepartment('1');
        document.getElementById("Department").innerHTML="Исследовательская разработка";
    }
    const CopyDepartment0 = () => {
        setDepartment('0');
        document.getElementById("Department").innerHTML="Человеческие ресурсы";
    }
    const CopyDepartment2 = () => {
        setDepartment('2');
        document.getElementById("Department").innerHTML="Продажи";    }
    const CopyEducation = (event) => {
        setEducation(event.target.value);
    }
    const CopyEducationField = () => {
        setEducationField('0');

        document.getElementById("field").innerHTML="Человеческие ресурсы";
    }
    const CopyEducationField1 = () => {
        setEducationField('1');
        document.getElementById("field").innerHTML="Наука о жизни";
    }
    const CopyEducationField2 = () => {
        setEducationField('2');

        document.getElementById("field").innerHTML="Маркетинг";
    }
    const CopyEducationField3 = () => {
        setEducationField('3');
        document.getElementById("field").innerHTML="Медицина";
    }
    const CopyEducationField4 = () => {
        setEducationField('4');

        document.getElementById("field").innerHTML="Другое";
    }
    const CopyEducationField5 = () => {
        setEducationField('5');

        document.getElementById("field").innerHTML="Техническая степень";
    }
    const CopyGender = () => {
        setGender('1');
        document.getElementById("gender").innerHTML="Мужской";
    }
    const CopyGender0 = () => {
        setGender('0');
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
    const CopyMaritalStatus = () => {
        setMaritalStatus('1');
        document.getElementById("FamilyPos").innerHTML="Женат (замужем)";    }
    const CopyMaritalStatus2 = () => {
        setMaritalStatus('2');
        document.getElementById("FamilyPos").innerHTML="Не женат (не замужем)";    }
    const CopyMaritalStatus0 = () => {
        setMaritalStatus('0');
        document.getElementById("FamilyPos").innerHTML="Разведён (разведена)";    }
    const CopyMonthlyIncome = (event) => {
        setMonthlyIncome(event.target.value);
    }
    const CopyNumCompaniesWorked = (event) => {
        setNumCompaniesWorked(event.target.value);
    }
    const CopyOverTime = () => {
        setOverTime('1');
        document.getElementById("Over").innerHTML="Да";
    }
    const CopyOverTime0 = () => {
        setOverTime('0');
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
    React.useEffect(() => {dispatch(fetchTests())
        document.getElementById("infoUser").innerHTML="Добавление сотрудника";}, [])


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
                                            <li><a href="#" type='button' onClick={CopyBusinessTravel}>Часто</a></li>
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
                        <div className="questionTxt">Сфера образования</div>
                    </div>
                    <div className="answers">
                        <nav id="nav">
                            <ul>
                                <li><a href="#" id="field">Выбрать</a>
                                    <ul className="second">
                                        <li><a href="#" onClick={CopyEducationField}>Человеческие ресурсы</a></li>
                                        <li><a href="#" onClick={CopyEducationField1}>Наука о жизни</a></li>
                                        <li><a href="#" onClick={CopyEducationField2}>Маркетинг</a></li>
                                        <li><a href="#" onClick={CopyEducationField3}>Медицина</a></li>
                                        <li><a href="#" onClick={CopyEducationField4}>Другое</a></li>
                                        <li><a href="#" onClick={CopyEducationField5}>Техническая степень</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
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
                        <div className="questionTxt"> Годы работы с Нынешним менеджером</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyYearsWithCurrManager}></input>
                    </div>

                </div>

            </div>
            <div className="accept">
                <button type="submit" onClick={sendTest}>Отправить</button>
            </div>
        </div>
    );
}

export default AddUser;