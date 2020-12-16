import React, { Component } from "react";
import { fetchProductData } from "../../api/products.js";
import "./product.css";
import { Link } from "react-router-dom";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: [],
    };
  }

  fecthNews = async () => {
    const datas = await fetchProductData();
    this.setState({
      datas: datas,
    });
  };

  componentDidMount() {
    this.fecthNews();
  }

  render() {
    return (
      <div className="product_css">
        <div className="container">
          <div className="tollbar">
            <h1>This is h1</h1>
            <Link href="#" className="active">
              Success
            </Link>
            <Link href="#">Success</Link>
            <Link href="#">Success</Link>
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
              <div className="card-columns">
                {this.state.datas.map((item) => (
                  <div className="card p-3" key={item.id}>
                    <blockquote className="blockquote mb-0">
                      <img width="100%" height="auto" src={item.avatar} />
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
