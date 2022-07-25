import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
const Button = (props) => {
    const { className, children, onClick } = props;
    return (
        <button className={`btn ${className}`} onClick={onClick ? () => onClick() : null}>
            {children}
        </button>
    );
};

export const OutlineButton = (props) => {
    const { className, children, onClick } = props;
    return (
        <Button className={`btn-outline ${className}`} onClick={onClick ? () => onClick() : null}>
            {children}
        </Button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
};

export default Button;
