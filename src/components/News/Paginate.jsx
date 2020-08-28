import React from 'react';

const Paginate = (props) => {

    const { _totalRows, _limit, _page } = props.paginate;
    const countPage = Math.ceil(_totalRows / _limit);

    const onClickCallNewsPage = (newpage) => {
        props.handleClickUpdatePage(newpage);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={_page == 1 ? "disabled page-item" : "page-item"} >
                    <a className="page-link" href="#" aria-label="Previous" onClick={() => onClickCallNewsPage(_page - 1)}>
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                <li className={_page >= countPage ? "disabled page-item" : "page-item"}>
                    <a className="page-link" href="#" aria-label="Next" onClick={() => onClickCallNewsPage(_page + 1)}>
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
export default Paginate;