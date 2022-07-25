import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import tmdbApi, { catagory } from '../../api/tmdbApi';
import CastList from './CastList';
import './detail.scss';
import VideoList from './VideoList';
import MovieList from '../../components/movie-list/MovieList';
const Detail = (props) => {
    const { catalogy, id } = useParams();
    const [item, setItem] = useState(null);
    useEffect(() => {
        const getDetail = async () => {
            const params = {};

            const response = await tmdbApi.detail(catagory[catalogy], id, { params });

            window.scrollTo(0, 0);
            setItem(response);
        };
        getDetail();
    }, [catalogy, id]);

    return (
        <>
            {item && (
                <>
                    <div
                        className="banner"
                        style={{
                            backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`,
                        }}
                    ></div>
                    <div className="mb-3 detail-content container">
                        <div className="detail-content__poster">
                            <div
                                className="detail-content__poster__image"
                                style={{
                                    backgroundImage: `url(${apiConfig.originalImage(
                                        item.poster_path || item.backdrop_path,
                                    )})`,
                                }}
                            ></div>
                        </div>
                        <div className="detail-content__info">
                            <h2 className="title">{item.title || item.name}</h2>
                            <div className="genres">
                                {item.genres &&
                                    item.genres.slice(0, 5).map((genre, index) => (
                                        <span key={index} className="genres__item">
                                            {genre.name}
                                        </span>
                                    ))}
                            </div>
                            <p className="overview">{item.overview}</p>
                            <div className="cast">
                                <div className="section__header">
                                    <h2>Casts</h2>
                                </div>
                                <CastList id={item.id} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="section mb-3">
                            <VideoList id={item.id} />
                        </div>
                        <div className="section mb-3">
                            <MovieList catagory={catalogy} id={item.id} type="similar" />
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Detail;
