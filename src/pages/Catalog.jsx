import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/page-header/PageHeader';
import { catagory as cata } from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid';
const Catalog = () => {
    const { catalogy } = useParams();

    return (
        <>
            <PageHeader>{catalogy === cata.movie ? 'Movies' : 'TV Series'}</PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid catagory={catalogy} />
                </div>
            </div>
        </>
    );
};

export default Catalog;
