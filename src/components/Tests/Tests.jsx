import React from "react";
import './Tests.scss';
const Tests = () =>{

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
                            <div className="answers1">1</div>
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