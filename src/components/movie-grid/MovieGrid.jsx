import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import tmdbApi, { catagory, movieType, tvType } from '../../api/tmdbApi';
import { OutlineButton } from '../button/Button';
import MovieCard from '../movie-card/MovieCard';
import Search from '../search/Search';
import './movie-grid.scss';

const MovieGrid = ({ catagory: _catagory }) => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();
    useEffect(() => {
        const getItems = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = {};

                switch (_catagory) {
                    case catagory.movie:
                        response = await tmdbApi.getMovieList(movieType.upcoming, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(tvType.popular, { params });
                }
            } else {
                const params = {
                    query: keyword,
                };
                response = await tmdbApi.search(_catagory, { params });
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        };
        getItems();
    }, [_catagory, keyword]);

    const handleLoadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1,
            };

            switch (_catagory) {
                case catagory.movie:
                    response = await tmdbApi.getMovieList(movieType.upcoming, { params });
                    break;
                default:
                    response = await tmdbApi.getTvList(tvType.popular, { params });
            }
        } else {
            const params = {
                page: page + 1,
                query: keyword,
            };
            response = await tmdbApi.search(_catagory, { params });
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    };
    return (
        <>
            <div className="section mb-3">
                <MovieSearch catagory={_catagory} />
            </div>
            <div className="movie-grid">
                {items.map((item, index) => (
                    <MovieCard key={index} item={item} catagory={_catagory} />
                ))}
            </div>
            {page < totalPage ? (
                <div className="movie-grid__loadmore">
                    <OutlineButton className="small" onClick={handleLoadMore}>
                        Load More
                    </OutlineButton>
                </div>
            ) : null}
        </>
    );
};

const MovieSearch = (props) => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    const gotoSearch = useCallback(() => {
        if (keyword.trim().length > 0) {
            navigate(`/${catagory[props.catagory]}/search/${keyword}`);
            setKeyword('');
        } else {
            navigate(`/${catagory[props.catagory]}`);
        }
    }, [keyword, props, navigate]);

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                gotoSearch();
            }
        };
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, gotoSearch]);
    return (
        <>
            <Search
                type="text"
                placeholder="Enter Value"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                onClickBtn={gotoSearch}
            />
        </>
    );
};

export default MovieGrid;
