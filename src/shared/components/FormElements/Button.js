import React from 'react';

import './Button.css';

const Button = props => {
    if (props.href) {
        return (
            <a
                className={`button button--${props.size || 'default'} ${props.inverse &&
                    'button--inverse'} ${props.danger && 'button--danger'}`}
                href={props.href} rel="noreferrer" target={props.new ? '_blank' : ''}
            >
                {props.children}
            </a>
        );
    }
    return (
        <button
            className={`button button--${props.size || 'default'} ${props.inverse &&
                'button--inverse'} ${props.danger && 'button--danger'}`}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
