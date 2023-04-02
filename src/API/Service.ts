import axios from 'axios'
import { baseUrl } from '../constants/constants';

export default class Service {
    static async fetchData(limit: number, page: number) {
        try {
            const response = await axios.get(baseUrl,
                {
                    params: {
                        _limit: limit,
                        _page: page
                    }
                }
            )
            return response
        } catch (error) {
            console.log(error);
        }
    }
}