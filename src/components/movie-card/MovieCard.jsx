import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './movie-card.scss';
import Button from '../button/Button';
import { catagory } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const MovieCard = (props) => {
    const item = props.item;
    const link = '/' + catagory[props.catagory] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
};

MovieCard.propTypes = {};

export default MovieCard;
