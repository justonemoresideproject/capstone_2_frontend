import axios from 'axios'

import { returnCorrectData } from '../Components/Helpers/TextFunctions.js';

const { TOKEN, BASE_URL } = require('./apiConfig.js')

class CommonApi {
    static async request(endpoint, data = {}, method = "get", token = TOKEN) {
        console.debug("API Call:", endpoint, data, method);
        
        const url = `${BASE_URL}/${endpoint}`;
        const headers = { Authorization: `Bearer ${token}` };
        const params = (method === "get")
            ? data
            : {};
    
        try {
          return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
          console.error("API Error:", err.response);
          return err
          // let message = err.response.data.error.message;
          // throw Array.isArray(message) ? message : [message];
        }
    }
}

export default CommonApi