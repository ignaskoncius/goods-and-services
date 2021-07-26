import React, { Component } from 'react';
import { getAllData } from './utils/requests';
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

  FilterGoodsServices = async (filterValue) => {
    console.log('filtruoji itemus');
  };

  render() {
    return (
      <div className="App">
        <MyForm onGetAllDataFromDb={this.getAllDataFromDb}></MyForm>
        <GoodsServicesList
          onFilterGoodsServices={this.FilterGoodsServices}
          allData={this.state.allData || []}
        ></GoodsServicesList>
      </div>
    );
  }
}

export default App;
