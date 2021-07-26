import React, { Component } from 'react';

class OneItem extends Component {
  state = {};
  render() {
    const { item: i } = this.props;
    return (
      <div className={'card m-2 ' + (i.goodsServicesType === 'Goods' ? 'bg-warning' : 'bg-info')}>
        <div className="card-header">Type: {i.goodsServicesType} </div>
        <div className="card-body">
          <h5 className="card-title">{i.name}</h5>
          <p className="card-text">Price: {i.price}</p>
          <p className="card-text">Quantity: {i.quantity}</p>
          <p className="card-text">Description: {i.description}</p>
          {i.goodsServicesType === 'Services' && <p className="card-text">Duration: {i.duration}</p>}
        </div>
        <div className="card-footer">
          <button className="btn btn-success">Edit</button>
          <button onClick={() => this.props.onDelete(i._id)} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default OneItem;
