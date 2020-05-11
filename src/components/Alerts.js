import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { alertActions } from '../actions/alertActions';

const Alerts = () => {
    const alert = useSelector((state) => state.alert);
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }, []);
    return (
        <>
            {alert.message && (
                <div className="columns">
                    <div className="column is-offset-3 is-6">
                        <div className={`notification ${alert.type}`}>
                            <button
                                className="delete"
                                onClick={() => {
                                    // clear alert
                                    dispatch(alertActions.clear());
                                }}
                            />
                            {alert.message}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Alerts;
