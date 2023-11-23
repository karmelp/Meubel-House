import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://293cec0d-e469-4a2a-9169-928c627f4a60.mock.pstmn.io/api/v1',
  headers: {'Content-Type': 'application/json'}
});

export default instance;