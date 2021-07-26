import React, { Component } from 'react';

class MyForm extends Component {
  state = {
    name: '',
    price: null,
    quantity: null,
    description: '',
    goodsServicesType: 'Goods',
    duration: null,
  };
  render() {
    return (
      <div className="w-50">
        <h2>Create new goods or services</h2>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" name="name" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <input type="number" className="form-control" name="price" placeholder="Enter price" />
          </div>
          <div className="form-group">
            <input type="number" className="form-control" name="quantity" placeholder="Enter quantity" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="description" placeholder="Enter description" />
          </div>
          <div className="form-group">
            <input type="number" className="form-control" name="duration" placeholder="Enter duration" />
          </div>
          <select className="form-control" id="goodsServices">
            <option value="Goods">Goods</option>
            <option value="Services">Services</option>
          </select>

          <button type="button" className="btn btn-success mt-3">
            Submit form
          </button>
        </form>
      </div>
    );
  }
}

export default MyForm;
