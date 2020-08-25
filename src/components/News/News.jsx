import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import './news.css';
import { fetchnewsdata } from '../../api/news.js';
const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fecthNews = async () => { setNews(await fetchnewsdata()) };
        fecthNews();
    }, [setNews])

    return (
        <div className="news_body">
            {news.map((item, i) => (
                <a href={item.url} target="_blank">
                    <Card key={i}>
                        <img width="100%" src={item.urlToImage} alt={item.title} />
                        <CardBody>
                            <CardTitle tag="h6">{item.title}</CardTitle>
                        </CardBody>
                    </Card>
                </a>
            ))}
        </div>
    );
};

export default News;