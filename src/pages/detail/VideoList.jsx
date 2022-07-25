import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';

const VideoList = (props) => {
    const { catalogy } = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.getVIdeos(catalogy, props.id);
            setVideos(response.results.slice(0, 5));
        };
        getCredits();
    }, [catalogy, props, videos]);
    return (
        <>
            {videos.map((item, index) => (
                <Video key={index} item={item} />
            ))}
        </>
    );
};
const Video = ({ item }) => {
    const iframeRef = useRef(null);
    useEffect(() => {
        const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);
    return (
        <div className="video">
            <div className="video__title">
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width="100%"
                title="video"
            ></iframe>
        </div>
    );
};

export default VideoList;
