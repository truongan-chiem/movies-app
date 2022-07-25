import React from 'react';
import PropTypes from 'prop-types';
import './search.scss';
import { OutlineButton } from '../button/Button';

const Search = ({ placeholder, value, onChange, onClickBtn }) => {
    return (
        <div className="search">
            <input required type="text" onChange={(e) => onChange(e)} value={value} />
            <label>{placeholder}</label>
            <OutlineButton className="small" onClick={() => onClickBtn()}>
                <i className="bx bx-search"></i>
            </OutlineButton>
        </div>
    );
};

Search.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Search;
