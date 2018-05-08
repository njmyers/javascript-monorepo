import React from 'react';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

function cascadingStatus(status) {
    if (!Array.isArray(status)) return status;
    else if (status.includes('error')) return 'error';
    else if (status.includes('loading')) return 'loading';
    else if (status.includes('resolved')) return 'resolved';
}

function StatusSwitch(Wrapped) {
    return (props) => {
        const status = cascadingStatus(props.status);

        switch (status) {
            case 'blank':
            case 'loading':
                return <Spinner />;
            case 'error':
                return <ErrorMessage type={props.type} />;
            case 'resolved':
                return <Wrapped {...props} />;
            default:
                return null;
        }
    };
}

export default StatusSwitch;
