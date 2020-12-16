import React, { Component } from "react";
import { fetchProductData } from "../../api/products.js";
import "./product.css";
import { Link } from "react-router-dom";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: [],
      limit: 1,
    };
  }

  fecthNews = async (abc) => {
    const data = await fetchProductData(abc);
    this.setState({
      datas: this.state.datas.concat(data),
    });
  };


  moreLoadDemo(abc) {
    this.setState({
      limit: abc + 1,
    });
    this.fecthNews(this.state.limit);
  }

  ImageExist(url) {
    var img = new Image();
    img.src = url;
    return img.height != 0;
  }

  componentDidMount() {
    this.fecthNews(this.state.limit);
  }
 
  render() {
    console.log('call render')
    return (
      <div className="product_css">
        <div className="container">
          <div className="tollbar">
            <h1>This is h1</h1>
            <Link to="#" className="active">
              Success
            </Link>
            <Link to="#">Success</Link>
            <Link to="#">Success</Link>
          </div>
          <div className="row">
            <div className="col-md-2">
              <div className="list-menu_categories">
                <Link to="#" className="active">
                  Category item
                </Link>
                <Link to="#">Category item</Link>
                <Link to="#">Category item</Link>
                <Link to="#">Category item</Link>
              </div>
            </div>
            <div className="col-md-10">
              <div className="card-columns row">
                {this.state.datas.map(
                  (item) =>
                    this.ImageExist(item.avatar) && (
                      <div className="card col-md-3" key={item.id}>
                        <blockquote className="blockquote mb-0">
                          <img width="100%" height="auto" src={item.avatar} />
                        </blockquote>
                        <h5>{item.name}</h5>
                      </div>
                    )
                )}
              </div>
              <div className="more-load">
                <button
                  className="btn btn-danger"
                  onClick={() => this.moreLoadDemo(this.state.limit)}
                >
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
