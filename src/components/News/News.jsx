import React, { useEffect, useState } from 'react';
import './news.css';
import { fetchnewsdata } from '../../api/news.js';
const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fecthNews = async () => { setNews(await fetchnewsdata()) };
        fecthNews();
    }, [setNews])

    return (
        <div className="container">
            <h1 className="text-center"> B L O G </h1>
            <div className="row row-cols-1 row-cols-md-2">
                {news.map((item, i) => (
                    <div className="col mb-4" key={i}>
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
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default News;