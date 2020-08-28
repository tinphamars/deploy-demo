import React, { useEffect, useState } from 'react';
import './news.css';
import { fetchnewsdata } from '../../api/news.js';
import Paginate from './Paginate';

const News = () => {

    const paraInitial = {
        '_page': 1,
        '_limit': 10,
    };

    const [news, setNews] = useState([]);
    const [paginate, setPaginate] = useState([]);
    const [paras, setParas] = useState(paraInitial);

    useEffect(() => {
        const queryString = require('query-string');
        const string = queryString.stringify(paras);

        const fecthNews = async () => {
            const datas = await fetchnewsdata(string);
            setNews(datas.data);
            setPaginate(datas.pagination);
        };

        fecthNews();

    }, [paras])

    const handleClickUpdatePage = (newpage) => {
        setParas({
            ... { '_page': newpage }
        });
    }

    return (
        <div className="container">
            <h1 className="text-center"> __B L O G __</h1>
            <Paginate paginate={paginate} handleClickUpdatePage={handleClickUpdatePage} />
            <div className="row row-cols-1 row-cols-md-2">
                {news.map((item) => (
                    <div className="col mb-4" key={item.id}>
                        <div className="card">
                            <img width="100%" src={item.imageUrl} alt={item.title} className="card-img-top" />
                            <div className="card-body">
                                <a href="#"><h5 className="card-title">{item.title}</h5></a>
                                <p className="font-italic text-muted">Author: {item.author}</p>
                                <p className="card-text">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <Paginate paginate={paginate} handleClickUpdatePage={handleClickUpdatePage()} /> */}
        </div>
    );
};

export default News;