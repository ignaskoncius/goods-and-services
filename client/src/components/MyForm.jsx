import React, { Component } from 'react';
import axios from 'axios';

class MyForm extends Component {
  state = {
    name: '',
    price: '',
    quantity: '',
    description: '',
    goodsServicesType: 'Goods',
    duration: '',
  };

  resetState = () => {
    this.setState({ name: '', price: '', quantity: '', description: '', goodsServicesType: 'Goods', duration: '' });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Trying to submit form');
    const { name, price, quantity, description, goodsServicesType, duration } = this.state;
    const dataToCreateNewObj = { name, price, quantity, description, goodsServicesType, duration };
    const ats = await axios.post('http://localhost:4000/goodsServices/new', dataToCreateNewObj);
    this.resetState();
    this.props.onGetAllDataFromDb();
    console.log(ats.data);
  };

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { state: s } = this;
    return (
      <div className="w-50">
        <h2>Create new goods or services</h2>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleInput}
              value={s.name}
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleInput}
              value={s.price}
              type="number"
              className="form-control"
              name="price"
              placeholder="Enter price"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleInput}
              value={s.quantity}
              type="number"
              className="form-control"
              name="quantity"
              placeholder="Enter quantity"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleInput}
              value={s.description}
              type="text"
              className="form-control"
              name="description"
              placeholder="Enter description"
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleInput}
              value={s.duration}
              type="number"
              className="form-control"
              name="duration"
              placeholder="Enter duration"
            />
          </div>
          <select
            onChange={this.handleInput}
            value={s.goodsServicesType}
            name="goodsServicesType"
            className="form-control"
            id="goodsServices"
          >
            <option value="Goods">Goods</option>
            <option value="Services">Services</option>
          </select>
          <button type="submit" className="btn btn-success mt-3">
            Submit form
          </button>
        </form>
      </div>
    );
  }
}

export default MyForm;
