import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '84f85609fd634c2084fe02628868d7ea',
  },
});
