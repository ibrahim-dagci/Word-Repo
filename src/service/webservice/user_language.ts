import {
    SERVRER_ADRESS
} from '../../constants';

export default class UserLanguageService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = SERVRER_ADRESS;
    }

    async getUserLanguages(token: string): Promise<any> {
        const response = await fetch(`${this.baseUrl}/api/user_languages`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => {
                return res.json();
            })
            .catch(e => e);
        if (!Array.isArray(response)) throw Error(response.message);

        return response;
    }

    async createUserLanguage(
        token: string,
        languageSymbol: string,
    ): Promise<any> {
        const response = await fetch(`${this.baseUrl}/api/user_languages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                languageSymbol,
            }),
        })
            .then(res => {
                return res.json();
            })
            .catch(e => e);
        if (response.statusCode != 200) throw Error(response.message);

        return response;
    }
}
