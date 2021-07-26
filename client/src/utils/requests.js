import axios from 'axios';

export const getAllData = async () => {
  try {
    const dataFromDb = await axios.get('http://localhost:4000/allGoodsServices');
    return dataFromDb.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFilterredData = async (filterValue) => {
  try {
    const filterredItems = await axios.get('http://localhost:4000/allGoodsServices/' + filterValue);
    return filterredItems.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteItem = async (id) => {
  try {
    await axios.delete('http://localhost:4000/allGoodsServices/delete/' + id);
  } catch (error) {
    console.log(error);
  }
};
