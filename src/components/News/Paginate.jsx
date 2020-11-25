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
                <li className={_page === 1 ? "disabled page-item" : "page-item"} >
                    <p className="page-link" aria-label="Previous" onClick={_page > 1 ? () => onClickCallNewsPage(_page - 1) : ''}>
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                    </p>
                </li>
                <li className={_page >= countPage ? "disabled page-item" : "page-item"}>
                    <p className="page-link" aria-label="Next" onClick={_page < countPage ? () => onClickCallNewsPage(_page + 1) : ''}>
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                    </p>
                </li>
            </ul>
        </nav>
    );
}
export default Paginate;