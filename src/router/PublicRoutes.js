import React from 'react'
import { Route, Routes } from 'react-router';
import PropTypes from 'prop-types';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const PublicRoutes = ({ isLoggedIn, component:Component, ...rest }) => {
    return (
        <Routes>
            <Route { ...rest } element={ (props) => (
                ( !isLoggedIn )
                    ? <Component { ...props } />
                    : <CalendarScreen />
            ) } />
        </Routes>
    )
}

PublicRoutes.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}