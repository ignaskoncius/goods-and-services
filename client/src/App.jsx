import React, { Component } from 'react';
import { getAllData, getFilterredData, deleteItem } from './utils/requests';
import './App.css';
import MyForm from './components/MyForm';
import GoodsServicesList from './components/GoodsServicesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { allData: [] };
  }

  componentDidMount() {
    this.getAllDataFromDb();
  }

  getAllDataFromDb = async () => {
    const allData = await getAllData();
    this.setState({ allData: allData });
    console.log(this.state.allData);
  };

  filterGoodsServices = async (filterValue) => {
    const filterredItems = await getFilterredData(filterValue);
    this.setState({ allData: filterredItems });
  };

  handleDelete = async (id) => {
    console.log('trying to delete', id);
    await deleteItem(id);
    this.getAllDataFromDb();
  };

  render() {
    return (
      <div className="App container">
        <MyForm onGetAllDataFromDb={this.getAllDataFromDb}></MyForm>
        <GoodsServicesList
          onDelete={this.handleDelete}
          onFilterGoodsServices={this.filterGoodsServices}
          allData={this.state.allData || []}
        ></GoodsServicesList>
      </div>
    );
  }
}

export default App;
