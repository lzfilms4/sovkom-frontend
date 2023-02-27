import React from "react";
import classList from './MyModal.Module.scss';
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import {decrement, fetchPersons, increment} from '../../redux/slices/personsSlice'

const MyModal =() =>{

    const dispatch = useDispatch()

    React.useEffect(() => {dispatch(fetchPersons())}, [])// загрузка
    const persons = useSelector((state) => state.persons)
    console.log(persons.persons)
    return(
        <div className={[classList.MyModal, classList.active].join(' ')}>
            <div className={classList.MyModalContent}>
                <div>
                    {
                        persons.persons.map(el => (<div>{el.fullName} </div>))
                    }
                </div>
            </div>

        </div>
    );
};
export default MyModal;