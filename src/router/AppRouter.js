import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth );
    useEffect( () => {
        dispatch( startChecking() );
    }, [dispatch]);

    if ( checking ) {
        return <h5>Espere...</h5>;
    }

    return (
        <Router>
            <Routes>
                <Route path="/login" element={ 
                    (!!!uid)
                    ? <LoginScreen />
                    : <Navigate to="/"></Navigate>
                } />
                <Route path="/"  element={ 
                    (!!uid)
                    ? <CalendarScreen />
                    : <Navigate to="/login"></Navigate> } />
                <Route path="*" element={ <CalendarScreen /> } />
            </Routes>
        </Router>
    )
}
