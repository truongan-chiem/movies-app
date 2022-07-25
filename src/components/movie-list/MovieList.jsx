import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import './movie-list.scss';

import tmdbApi, { catagory } from '../../api/tmdbApi';
import MovieCard from '../movie-card/MovieCard';

const MovieList = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.catagory) {
                    case catagory.movie:
                        response = await tmdbApi.getMovieList(props.type, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, { params });
                }
            } else {
                response = await tmdbApi.similar(props.catagory, props.id);
            }
            setItems(response.results);
        };
        getList();
    }, [props]);

    return (
        <div className="movie-list">
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <MovieCard item={item} catagory={props.catagory} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

MovieList.propTypes = {
    catagory: PropTypes.string.isRequired,
    type: PropTypes.string,
};

export default MovieList;
