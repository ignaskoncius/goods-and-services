import axios from 'axios';

export const getAllData = async () => {
  try {
    const dataFromDb = await axios.get('http://localhost:4000/allGoodsServices');
    return dataFromDb.data;
  } catch (error) {
    console.log(error);
  }
};
