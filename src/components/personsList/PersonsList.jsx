import React from "react";
import './personsList.scss';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import {fetchPersons} from '../../redux/slices/personsSlice'
import {fetchTests} from '../../redux/slices/testsSlice'
import {Link} from "react-router-dom";

const PersonsList =() =>{

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchPersons())
    }, [])// загрузка
    const persons = useSelector((state) => state.persons)
    return(
        <div className='personsList'>
            <div className='personsList__block'>
                    {
                        persons.persons.map((el,id) => (
                            <Link to={`/personsList/${el._id}`} key={id}>
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
export default PersonsList;