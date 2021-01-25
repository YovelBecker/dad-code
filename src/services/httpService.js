import axios from 'axios';

export default {
  async get(url){
    const res = await axios.get(url);
    return res.data;
  }
}