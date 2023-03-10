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
        //axios.post('https://bright-wasp-long-johns.cyclic.app/person/create',
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
                JobInvolvement: JobInvolement,
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
            }).then(res => console.log(res)).catch(err => console.log(err));
    }
    const CopyName = (event) => {
        setfullName(event.target.value);
    }
    const CopyAge = (event) => {
        setage(event.target.value);
    }
    const CopyBusinessTravel = () => {
        setBusinessTravel('1');
        document.getElementById("Travel").innerHTML="??????????";
    }
    const CopyBusinessTravel2 = () => {
        setBusinessTravel('2');
        document.getElementById("Travel").innerHTML="??????????";    }
    const CopyBusinessTravel0 = () => {
        setBusinessTravel('0');
        document.getElementById("Travel").innerHTML="??????";    }
    const CopyDailyRate = (event) => {
    setDailyRate(event.target.value);
    }
    const CopyDepartment = () => {
        setDepartment('1');
        document.getElementById("Department").innerHTML="?????????????????????????????????? ????????????????????";
    }
    const CopyDepartment0 = () => {
        setDepartment('0');
        document.getElementById("Department").innerHTML="???????????????????????? ??????????????";
    }
    const CopyDepartment2 = () => {
        setDepartment('2');
        document.getElementById("Department").innerHTML="??????????????";    }
    const CopyEducation = (event) => {
        setEducation(event.target.value);
    }
    const CopyEducationField = () => {
        setEducationField('0');

        document.getElementById("field").innerHTML="???????????????????????? ??????????????";
    }
    const CopyEducationField1 = () => {
        setEducationField('1');
        document.getElementById("field").innerHTML="?????????? ?? ??????????";
    }
    const CopyEducationField2 = () => {
        setEducationField('2');

        document.getElementById("field").innerHTML="??????????????????";
    }
    const CopyEducationField3 = () => {
        setEducationField('3');
        document.getElementById("field").innerHTML="????????????????";
    }
    const CopyEducationField4 = () => {
        setEducationField('4');

        document.getElementById("field").innerHTML="????????????";
    }
    const CopyEducationField5 = () => {
        setEducationField('5');

        document.getElementById("field").innerHTML="?????????????????????? ??????????????";
    }
    const CopyGender = () => {
        setGender('1');
        document.getElementById("gender").innerHTML="??????????????";
    }
    const CopyGender0 = () => {
        setGender('0');
        document.getElementById("gender").innerHTML="??????????????";
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
        document.getElementById("FamilyPos").innerHTML="?????????? (??????????????)";    }
    const CopyMaritalStatus2 = () => {
        setMaritalStatus('2');
        document.getElementById("FamilyPos").innerHTML="???? ?????????? (???? ??????????????)";    }
    const CopyMaritalStatus0 = () => {
        setMaritalStatus('0');
        document.getElementById("FamilyPos").innerHTML="???????????????? (??????????????????)";    }
    const CopyMonthlyIncome = (event) => {
        setMonthlyIncome(event.target.value);
    }
    const CopyNumCompaniesWorked = (event) => {
        setNumCompaniesWorked(event.target.value);
    }
    const CopyOverTime = () => {
        setOverTime('1');
        document.getElementById("Over").innerHTML="????";
    }
    const CopyOverTime0 = () => {
        setOverTime('0');
        document.getElementById("Over").innerHTML="??????";
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
        document.getElementById("infoUser").innerHTML="???????????????????? ????????????????????";}, [])


    return (
        <div className="maindiv">
            <div className="bl">
                <div className="col-4 col-md-12 block">
                    <div className="question">
                        <div className="questionTxt">??????</div>
                    </div>
                    <div className="answers">
                            <input  type="text" onChange={CopyName} ></input>
                    </div>

                    <div className="question">
                        <div className="questionTxt">??????????????</div>
                    </div>
                    <div className="answers">
                            <input type="text" onChange={CopyAge}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">?????????????? ??????????????</div>
                    </div>

                        <div className="answers">
                            <nav id="nav">
                                <ul>
                                    <li><a href="#" id="Travel">??????????????</a>
                                        <ul className="second">
                                            <li><a href="#" type='button' onClick={CopyBusinessTravel}>??????????</a></li>
                                            <li><a href="#" onClick={CopyBusinessTravel2}>??????????</a></li>
                                            <li><a href="#" onClick={CopyBusinessTravel0}>??????</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    <div className="question">
                        <div className="questionTxt">?????????????? ?????????? (??????????)</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyDailyRate}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">??????????</div>
                    </div>
                    <div className="answers">
                        <nav id="nav">
                            <ul>
                                <li><a href="#" id="Department">??????????????</a>
                                    <ul className="second">
                                        <li><a href="#" onClick={CopyDepartment}>?????????????????????????????????? ????????????????????</a></li>
                                        <li><a href="#" onClick={CopyDepartment2}>??????????????</a></li>
                                        <li><a href="#" onClick={CopyDepartment0}>???????????????????????? ??????????????</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="question">
                        <div className="questionTxt">??????????????????????</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyEducation}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">?????? ?? ?????????????? ???????????????????? ??????????????????</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyYearsSinceLastPromotion}></input>
                    </div>

                </div>
                <div className="col-4 col-md-12 block">
                    <div className="question">
                        <div className="questionTxt">??????</div>
                    </div>
                    <div className="answers">
                        <nav id="nav">
                            <ul>
                                <li><a href="#" id="gender">??????????????</a>
                                    <ul className="second">
                                        <li><a href="#" onClick={CopyGender}>??????????????</a></li>
                                        <li><a href="#" onClick={CopyGender0}>??????????????</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="question">
                        <div className="questionTxt">?????????????????? ????????????</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyHourlyRate}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">?????????????????????????? ?? ????????????</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyJobInvolement}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">?????????????? ????????????</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyJobLevel}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">???????????????? ??????????????????</div>
                    </div>
                    <div className="answers">
                        <nav id="nav">
                            <ul>
                                <li><a href="#" id="FamilyPos">??????????????</a>
                                    <ul className="second">
                                        <li><a href="#" onClick={CopyMaritalStatus}>??????????(??????????????)</a></li>
                                        <li><a href="#" onClick={CopyMaritalStatus0}>????????????????(??????????????????)</a></li>
                                        <li><a href="#" onClick={CopyMaritalStatus2}>???? ??????????(???? ??????????????)</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="question">
                        <div className="questionTxt">?????????????????????? ??????????</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyMonthlyIncome}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">???????????????????? ???????????????? ?? ?????????????? ??????????????</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyNumCompaniesWorked}></input>
                    </div>
                </div>
                <div className="col-4 col-md-12 block">
                    <div className="question">
                        <div className="questionTxt">????????????????????????</div>
                    </div>
                    <div className="answers">
                        <nav id="nav">
                            <ul>
                                <li><a href="#" id="Over">??????????????</a>
                                    <ul className="second">
                                        <li><a href="#" onClick={CopyOverTime}>????</a></li>
                                        <li><a href="#" onClick={CopyOverTime0}>??????</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="question">
                        <div className="questionTxt">?????????????????????? ????????</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyStandardHours}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">?????????? ?????????????? ?????? </div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyTotalWorkingYears}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">?????????? ??????????????????????</div>
                    </div>
                    <div className="answers">
                        <nav id="nav">
                            <ul>
                                <li><a href="#" id="field">??????????????</a>
                                    <ul className="second">
                                        <li><a href="#" onClick={CopyEducationField}>???????????????????????? ??????????????</a></li>
                                        <li><a href="#" onClick={CopyEducationField1}>?????????? ?? ??????????</a></li>
                                        <li><a href="#" onClick={CopyEducationField2}>??????????????????</a></li>
                                        <li><a href="#" onClick={CopyEducationField3}>????????????????</a></li>
                                        <li><a href="#" onClick={CopyEducationField4}>????????????</a></li>
                                        <li><a href="#" onClick={CopyEducationField5}>?????????????????????? ??????????????</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="question">
                        <div className="questionTxt">?????? ?? ????????????????</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyYearsAtCompany}></input>
                    </div>
                    <div className="question">
                        <div className="questionTxt">?????? ?? ???????????????? ????????</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyYearsInCurrentRole}></input>
                    </div>

                    <div className="question">
                        <div className="questionTxt"> ???????? ???????????? ?? ???????????????? ????????????????????</div>
                    </div>
                    <div className="answers">
                        <input type="text" onChange={CopyYearsWithCurrManager}></input>
                    </div>

                </div>

            </div>
            <div className="accept">
                <button type="submit" onClick={sendTest}>??????????????????</button>
            </div>
        </div>
    );
}

export default AddUser;