import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from '../../api/apiConfig';
import tmdbApi from '../../api/tmdbApi';

const CastList = (props) => {
    const { catalogy } = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.credits(catalogy, props.id);

            setCasts(response.cast.slice(0, 5));
        };
        getCredits();
    }, [catalogy, props, casts]);
    return (
        <div className="casts">
            {casts.map((item, index) => (
                <div className="casts__item" key={index}>
                    <div
                        className="casts__item__image"
                        style={{ backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` }}
                    ></div>
                    <div className="casts__item__name">{item.name}</div>
                </div>
            ))}
        </div>
    );
};

export default CastList;
