import React from 'react';

function Alert(props) {
    const capi = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        <div className="conatinerAlert">
        {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capi(props.alert.type)}</strong> : {props.alert.msg}.
            </div>}
        </div>
    );
}

export default Alert;
