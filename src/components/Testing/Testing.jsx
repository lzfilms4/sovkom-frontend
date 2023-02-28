import React from "react";
import './Testing.scss';
import { useSelector, useDispatch } from 'react-redux'
import {decrement, fetchPersons, increment} from '../../redux/slices/personsSlice'
import {Link} from "react-router-dom";

const Testing =() =>{

    const dispatch = useDispatch()

    React.useEffect(() => {dispatch(fetchPersons())}, [])// загрузка
    const persons = useSelector((state) => state.persons)
    return(
        <div className='personsList'>
            <div className='personsList__block'>
                {
                    persons.persons.map((el,id) => (
                        <Link to={`/Tests/${el._id}`} key={id}>
                            <div>{el.fullName}</div>
                        </Link>
                    ))
                }
            </div>
            <div className='personsList__block'>
                {
                    persons.persons.map((el,id) => (<div key={id}>{el.fullName} </div>))
                }
            </div>
        </div>
    );
};
export default Testing;