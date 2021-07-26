import React, { Component } from 'react';
import OneItem from './OneItem';

class GoodsServicesList extends Component {
  state = {};
  render() {
    return (
      <div className="main-list">
        <h2>Goods and Services list</h2>
        <div className="btn-group mb-3" role="group">
          <button onClick={() => this.props.onFilterGoodsServices()} type="button" className="btn btn-primary">
            All Goods and Services
          </button>
          <button onClick={() => this.props.onFilterGoodsServices('Goods')} type="button" className="btn btn-warning">
            Goods only
          </button>
          <button onClick={() => this.props.onFilterGoodsServices('Services')} type="button" className="btn btn-info">
            Services only
          </button>
        </div>
        <div className="items-list d-flex flex-wrap">
          {this.props.allData.map((item) => (
            <OneItem item={item} key={item._id}></OneItem>
          ))}
        </div>
      </div>
    );
  }
}

export default GoodsServicesList;
