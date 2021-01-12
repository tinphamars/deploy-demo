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
      Isloading: false,
    };
  }

  fecthNews = async (abc) => {
    const data = await fetchProductData(abc);
    this.setState({
      datas: this.state.datas.concat(data),
    });
  };

  componentWillMount() {
    this.fecthNews(this.state.limit);
  }

  displayItems() {
    var items = [];
    for (var i = 0; i < this.state.datas.length; i++) {
      items.push(
        <div className="card col-md-3" key={i + Math.random()}>
          <blockquote className="blockquote mb-0">
            <img
              width="100%"
              height="auto"
              src="https://images.unsplash.com/photo-1516475429286-465d815a0df7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </blockquote>
          <h5>{this.state.datas[i]["name"]}</h5>
        </div>
      );
    }
    return items;
  }

  moreLoadDemo() {
    this.setState({ Isloading: true });
    setTimeout(() => {
      this.setState(
        {
          limit: this.state.limit + 1,
          Isloading: false,
        },
        () => {
          this.fecthNews(this.state.limit);
        }
      );
    }, 3000);
  }

  ImageExist(url) {
    var img = new Image();
    img.src = url;
    return img.height != 0;
  }

  render() {
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
              <div className="card-columns row">{this.displayItems()}</div>
              <div className="more-load">
                <button
                  className="btn btn-danger"
                  onClick={() => this.moreLoadDemo()}
                >
                  {this.state.Isloading ? "Loading ... " : " More Load"}
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
