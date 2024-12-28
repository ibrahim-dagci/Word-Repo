import axios from 'axios';
import {
    SERVRER_ADRESS
} from '../../constants';

export default class DictionaryService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = SERVRER_ADRESS;
    }

    async getPronunciation(word:string): Promise<any> {
        const response = await axios.get(`${this.baseUrl}/api/dictionary/pronunciations/${word}`);
        if (response.status != 200) throw Error(response.data.message);

        return response.data;
    }
}