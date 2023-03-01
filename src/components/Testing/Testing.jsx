import React from "react";
import './Testing.scss';

import { useSelector, useDispatch } from 'react-redux'
import {fetchTests} from '../../redux/slices/testsSlice'
import {Link} from "react-router-dom";

const Testing =() =>{

    const dispatch = useDispatch()

    React.useEffect(() => {dispatch(fetchTests())}, [])
    const tests = useSelector((state) => state.tests)
    return(
        <div className='personsList'>
            <div className='personsList__block'>
                {
                    tests.tests.map((el,id) => (
                       <div className="test">
                            <div>Тест: {el.name}</div>
                            <Link to={`/Tests/${el._id}`} key={id}>  
                                <div>Получить ссылку</div>
                            </Link>
                        </div>  
                    ))
                }
            </div>
        </div>
    );
};
export default Testing;